import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent {
  
  name: string = "";

  employees=[
    {name:"Ned",age: 25 ,salary:50000,isVisible:false},
    {name:"Sukriti",age: 30 ,salary:60000,isVisible:true},
    {name:"John",age: 35 ,salary:70000,isVisible:false},
  ]

  constructor() {
    this.name = "Sukriti";
  }

  updateName():void{
    
    this.name = "Sukriti Das";
  }
  toggleVisibility(employee: any): void {
    employee.isVisible = !employee.isVisible;
  }

}

