import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ShowListComponent } from './show-list/show-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';


@NgModule({
  declarations: [
    ShowListComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  exports:[
     RestaurantListComponent
  ]
})
export class RestaurantsModule { }
