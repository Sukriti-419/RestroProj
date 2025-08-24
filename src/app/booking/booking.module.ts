import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
 
})
export class BookingModule { }
