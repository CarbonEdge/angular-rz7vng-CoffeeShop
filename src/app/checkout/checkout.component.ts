import { Component } from '@angular/core';
import { Purchase, purchases } from '../purchases';
import { Router } from '@angular/router';
import { User, users } from '../users';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {

  constructor(private router: Router) { }

  sales = purchases;
  total = 0;
  points = 0;
  clientName = "";
  purchases: Purchase[] = purchases;


  hasPurchases = purchases.length > 0;

  ngOnInit() {
    this.sales = purchases;
    this.total = purchases.reduce((sum, purchase) => sum + purchase.price, 0);
    this.points = purchases.reduce((sum, purchase) => sum + purchase.points, 0);
  }

  onSubmit(){


    const client: User = {
      id: Math.floor(Math.random() * 1000), // generate a random ID
      name: this.clientName,
      points: this.points
    };

    users.push(client);


    this.router.navigate(['userpoints']);
  }
}
