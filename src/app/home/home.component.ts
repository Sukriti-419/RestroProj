import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  onBookNow() {
    const savedEmail = localStorage.getItem('userEmail');
    if (!savedEmail) {
      // Not registered, redirect to registration form
      this.router.navigate(['/register']);
    } else {
      // Registered, redirect to restaurant list
      this.router.navigate(['/restaurants']);
    }
  }
}
