import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { DataRequestService } from '../shared/data-request.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private dataRequestService: DataRequestService) { }

  product: Product = {
    id: 0, // generate a random ID
    name: '',
    price: 0,
    description: '',
    points: 0.1
  };

  onSubmit() {

    this.dataRequestService.createProduct(this.product).subscribe((data: any) => {
      // reset the form
      this.product = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        points: 0.1
      };

    });

  }

}
