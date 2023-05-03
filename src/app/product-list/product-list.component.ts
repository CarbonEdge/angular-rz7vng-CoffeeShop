import { Component } from '@angular/core';

import { Product } from '../products';
import { PurchaseServiceService } from '../purchase-service.service';
import { DataRequestService } from '../shared/data-request.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private purchaseService: PurchaseServiceService, private dataRequestService: DataRequestService) { 
    this.setupDefaultProducts();
  }

  products = null;
  total = 0;
  points = 0;

  setupDefaultProducts(){
    this.dataRequestService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

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