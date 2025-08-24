import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBookingComponent } from './booking/table-booking/table-booking.component';
import { UserRegisterComponent } from './registration/user-register/user-register.component';

const routes: Routes = [


  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'booking',
    component: TableBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
