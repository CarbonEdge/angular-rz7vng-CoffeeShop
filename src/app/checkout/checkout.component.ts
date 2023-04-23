import { Component } from '@angular/core';
import { Purchase, purchases } from '../purchases';
import { Router } from '@angular/router';

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
    this.total = purchases.reduce((sum, purchase) => sum + purchase.price, 0);
    this.points = purchases.reduce((sum, purchase) => sum + purchase.points, 0);
  }

  onSubmit(){
    this.purchases = [];
    this.router.navigate(['userpoints']);
  }
}
