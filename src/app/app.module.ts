import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { BookingModule } from './booking/booking.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { HomeComponent } from './home/home.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    RestaurantsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
