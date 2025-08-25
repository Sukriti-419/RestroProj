import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent {
  
  name: string = "";
  imgUrl = "https://via.placeholder.com/150";
  username : string = "";
  submitted: boolean = false;

  user ={
    name : '',
    email : ''
  };

  employees=[
    {name:"Ned",age: 25 ,salary:50000,isVisible:false},
    {name:"Sukriti",age: 30 ,salary:60000,isVisible:true},
    {name:"John",age: 35 ,salary:70000,isVisible:false},
  ]

  constructor(private registerService: RegisterService) {
    this.name = 'Sukriti01';
    registerService.sample();
  }

  updateName():void{
    
    this.name = "Sukriti Das";
    this.registerService.updateUser();
  }

  toggleVisibility(index : number) : void{
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }


  onRegister(form: any) {
      this.submitted = true;
      alert('Sucessfully Register!');
      form.resetForm();
    }
}

