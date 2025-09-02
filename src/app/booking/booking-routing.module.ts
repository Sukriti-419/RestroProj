import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBookingComponent } from './table-booking/table-booking.component';

const routes: Routes = [
  { path: '', component: TableBookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
