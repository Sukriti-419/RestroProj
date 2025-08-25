import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants = [
    {
      name: 'Red Spice',
      description: 'Spicy Indian cuisine',
      location: 'Downtown',
      image: 'https://plus.unsplash.com/premium_photo-1723928494246-0c38f1bdf204?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Green Bowl',
      description: 'Fresh salads & bowls',
      location: 'Uptown',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Blue Plate',
      description: 'Classic American diner',
      location: 'Midtown',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
