import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    id: Math.floor(Math.random() * 1000), // generate a random ID
    name: '',
    price: 0,
    description: '',
    points: 10
  };

  onSubmit() {
    products.push(this.product);

    // reset the form
    this.product = {
      id: Math.floor(Math.random() * 1000),
      name: '',
      price: 0,
      description: '',
      points: 10
    };
  }

}
