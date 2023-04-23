import { Component } from '@angular/core';
import { User, users } from '../users';

@Component({
  selector: 'app-user-points',
  templateUrl: './user-points.component.html',
  styleUrls: ['./user-points.component.css']
})

export class UserPointsComponent {

  customers = users;

}
