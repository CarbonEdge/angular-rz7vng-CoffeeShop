import { Component } from '@angular/core';
import { Purchase } from '../purchases';
import { Router } from '@angular/router';
import { User, users } from '../users';
import { PurchaseServiceService } from '../purchase-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {

  constructor(private router: Router, private purchaseService: PurchaseServiceService) { }

  sales = this.purchaseService.returnPurchases();
  total = 0;
  points = 0;
  clientName = "";


  hasPurchases = this.purchaseService.returnPurchases().length > 0;

  ngOnInit() {
    this.total = this.purchaseService.returnPurchases().reduce((sum, purchase) => sum + purchase.price, 0);
    this.points = this.purchaseService.returnPurchases().reduce((sum, purchase) => sum + purchase.points, 0);
  }

  addCustomer(name: string, points: number) {
    // Search for an existing customer by name
    const existingCustomer = users.find(customer => customer.name === name);
    if (existingCustomer) {
      // Update the existing customer's points
      existingCustomer.points += points;
    } else {
      // Add a new customer to the array
      const client: User = {
        id: Math.floor(Math.random() * 1000), // generate a random ID
        name: this.clientName,
        points: this.points
      };
  
      users.push(client);
    }
  }
  

  onSubmit(){

    this.addCustomer(this.clientName, this.points);

    this.purchaseService.clearPurchases();

    this.router.navigate(['userpoints']);
  }
}
