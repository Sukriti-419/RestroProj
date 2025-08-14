import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RegistrationRoutingModule } from './registration-routing.module';//--
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  exports: [  //---
    UserRegisterComponent//import { RegistrationRoutingModule } from './registration-routing.module';
  ]
})

export class RegistrationModule { }
