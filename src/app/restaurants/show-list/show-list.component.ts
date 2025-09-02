import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurants.service';
import { Restaurant } from '../models/restaurant-model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private router: Router, private restaurantService: RestaurantService) {}


  ngOnInit() {
  this.restaurantService.getRestaurants().subscribe(
   (data: Restaurant[]) => {
     this.restaurants = data;
     console.log('Fetched restaurants:', data); // Debug log
   },
   (error) => {
     console.error('Failed to fetch restaurants:', error);
   }
  );

  //dummy data
    
    
//   this.restaurants = [
//     {
//       restid: 1,
//       name: 'Spice Villa',
//       cuisine: 'Indian',
//       address: 'Downtown',
//       opentime: '10:00',
//       closetime: '23:00',
      
//       image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80'
//     },
//     {
//       restid: 2,
//       name: 'Green Bowl',
//       cuisine: 'Healthy Salads',
//       address: 'Uptown',
//       opentime: '09:00',
//       closetime: '21:00',
     
//       image: 'https://images.unsplash.com/photo-1679087860517-5dc07e5a8050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//       restid: 3,
//       name: 'Blue Plate',
//       cuisine: 'American Diner',
//       address: 'Midtown',
//       opentime: '08:00',
//       closetime: '22:00',
    
//       image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=300&q=80'
//     }
//   ];
// }
  } // end ngOnInit

  bookRestaurant(r: Restaurant) {
    this.router.navigate(['/booking'], {
      queryParams: {
        restaurantName: r.name,
        opentime: r.opentime,
        closetime: r.closetime
      }
    });
  }
}