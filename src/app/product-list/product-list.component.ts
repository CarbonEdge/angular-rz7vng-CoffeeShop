import { Component } from '@angular/core';

import { Product, products } from '../products';
import { Purchase, purchases } from '../purchases';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  total = 0;
  points = 0;

  buy(choice: Product) {

    this.total += choice.price;

    const sale: Purchase = {
      id: choice.id,
      client: '',
      price: choice.price,
      points: choice.points
    };

    purchases.push(sale);

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/