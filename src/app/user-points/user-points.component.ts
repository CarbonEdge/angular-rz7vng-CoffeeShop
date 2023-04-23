import { Component } from '@angular/core';
import { User, users } from '../users';

@Component({
  selector: 'app-user-points',
  templateUrl: './user-points.component.html',
  styleUrls: ['./user-points.component.css']
})

export class UserPointsComponent {

  customers = users;

  checkEligibility(customer: User) {
    if (customer.points >= 10) {
      alert(`${customer.name} is eligible for a free coffee!`);
    } else {
      alert(`${customer.name} is not eligible for a free coffee.`);
    }
  }

}
