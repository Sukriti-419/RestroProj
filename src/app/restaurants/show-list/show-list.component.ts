import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  @Input() restaurants: any[] = [];

  constructor(private router: Router) {}

  bookRestaurant(r: any) {
    // Navigate to booking form and pass restaurant name as query param
    this.router.navigate(['/booking'], { queryParams: { restaurant: r.name } });
  }

}
