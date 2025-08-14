import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
  declarations: [
    ShowListComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  exports:[
    ShowListComponent
  ]
})
export class RestaurantsModule { }
