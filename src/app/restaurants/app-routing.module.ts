import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ShowListComponent } from './show-list/show-list.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('../booking/booking.module').then(m => m.BookingModule)
  },
  { path: 'restaurants', component: ShowListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
