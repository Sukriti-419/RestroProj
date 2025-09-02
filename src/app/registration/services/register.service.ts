import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  //private apiUrl = 'https://dummyjson.com/users/add';
  private apiUrl = 'https://bb5adb0eb461.ngrok-free.app/api/users/v1/signup';
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
  return this.http.post<User>(this.apiUrl, user);
}
}