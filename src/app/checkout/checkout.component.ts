import { Component } from '@angular/core';
import { Purchase } from '../purchases';
import { Router } from '@angular/router';
import { User } from '../users';
import { PurchaseServiceService } from '../purchase-service.service';
import { DataRequestService } from '../shared/data-request.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {

  constructor(private router: Router, private purchaseService: PurchaseServiceService, private dataRequestService: DataRequestService) { }

  sales = this.purchaseService.returnPurchases();
  total = 0;
  points = 0;
  clientName = "";


  hasPurchases = this.purchaseService.returnPurchases().length > 0;

  ngOnInit() {
    this.total = this.purchaseService.returnPurchases().reduce((sum, purchase) => sum + purchase.price, 0);
    this.points = this.purchaseService.returnPurchases().reduce((sum, purchase) => sum + purchase.points, 0);
  }

  async addCustomer(name: string, points: number) {
    // Search for an existing customer by name
    const clientCreate = this.dataRequestService.getUsersExists(name).subscribe(async (existingCustomer: any) => {
      if (existingCustomer.name != null) {
        
        // Update the existing customer's points
        const client: User = {
          id: existingCustomer.id,
          name: existingCustomer.name,
          points: existingCustomer.points + points
        };
    
        await this.dataRequestService.updateUserPoints(client).subscribe(() =>{
          this.purchaseService.clearPurchases();

          this.router.navigate(['userpoints']);
        });
      } else {
        // Add a new customer to the array
        const client: User = {
          id: 0, // generate a primary key on server
          name: this.clientName,
          points: this.points
        };
    
        await this.dataRequestService.createUser(client).subscribe(() =>{
          this.purchaseService.clearPurchases();

          this.router.navigate(['userpoints']);
        });
      }
      
    });

  }

  onSubmit(){

    this.addCustomer(this.clientName, this.points);
  }
}
