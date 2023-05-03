import { Component } from '@angular/core';
import { User } from '../users';
import { DataRequestService } from '../shared/data-request.service';

@Component({
  selector: 'app-user-points',
  templateUrl: './user-points.component.html',
  styleUrls: ['./user-points.component.css']
})

export class UserPointsComponent {

  constructor(private dataRequestService: DataRequestService) {

    this.createDefaultUser();

   }

   customers = null;

   private createDefaultUser(): void {

    this.dataRequestService.getUsers().subscribe((data: any) => {
      this.customers = data;
    });
  }

  checkEligibility(customer: User) {
    if (customer.points >= 10) {
      alert(`${customer.name} is eligible for a free coffee!`);
    } else {
      alert(`${customer.name} is not eligible for a free coffee.`);
    }
  }

}
