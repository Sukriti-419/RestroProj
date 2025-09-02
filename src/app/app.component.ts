import { Component } from '@angular/core';
import { RegisterService } from './registration/services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestroProj';

  constructor(registerService : RegisterService){
       
  }
}
