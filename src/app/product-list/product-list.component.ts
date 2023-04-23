import { Component } from '@angular/core';

import { Product, products } from '../products';
import { PurchaseServiceService } from '../purchase-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private purchaseService: PurchaseServiceService) { }

  products = products;
  total = 0;
  points = 0;

  buy(choice: Product) {

    this.total += choice.price;

    this.purchaseService.addPurchase("", choice.price, choice.points);

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/