import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { User } from '../model/user-model'; // Correct import path

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  submitted = false;

  constructor(private registerService: RegisterService, private router: Router) {}

  onRegister(form: any) {
    if (form.valid) {
      const user: User = {
        name: form.value.name,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber,
        confirmPassword: form.value.confirmPassword,
        password: form.value.password
      };
      this.registerService.registerUser(user).subscribe(
        (response) => {
          console.log('User Registration Details:', response);
          alert('Successfully Registered!');
          // Save email for booking form auto-fill
          localStorage.setItem('userEmail', user.email);
          // Redirect to restaurant list
          this.router.navigate(['/restaurants']);
          form.resetForm();
        },
        (error) => {
          console.error('Registration failed:', error);
          alert('Registration failed!');
        }
      );
    }
  }
}