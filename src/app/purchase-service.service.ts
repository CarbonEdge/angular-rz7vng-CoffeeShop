import { Injectable } from '@angular/core';
import { Purchase } from './purchases';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  purchases: Purchase[] = [];

  constructor() {}

  returnPurchases(){
    return this.purchases;
  }

  addPurchase(client: string, price: number, points: number) {
    const newPurchase: Purchase = {
      id: this.purchases.length + 1,
      client: client,
      price: price,
      points: points
    };
    this.purchases.push(newPurchase);
  }

  clearPurchases() {
    this.purchases = [];
  }
}
