import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module'; // Importing the RegistrationModule
import { BookingModule } from './booking/booking.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
