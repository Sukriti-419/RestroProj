

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BookingRequest } from '../models/booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://bb5adb0eb461.ngrok-free.app/api/booking/v1/new'; 

  constructor(private http: HttpClient) {}

  createBooking(booking: BookingRequest): Observable<any> {
    // Map BookingRequest -> backend expected payload
    const payload = {
      restid: booking.restid,
      restaurantName: booking.restaurantName,
      openTime: `${booking.bookingDate}T${booking.bookingTime}:00`, // e.g. 2025-09-30T19:00:00
      closeTime: `${booking.bookingDate}T${this.addDuration(booking.bookingTime, 2)}:00`, // example: +2 hours
      people: booking.people,
      email: booking.email,
      status:booking.status

    };

    return this.http.post<any>(this.apiUrl, payload);
  }

  private addDuration(time: string, hours: number): string {
    const [hh, mm] = time.split(':').map(Number);
    const newDate = new Date();
    newDate.setHours(hh, mm, 0, 0);
    newDate.setHours(newDate.getHours() + hours);
    return newDate.toTimeString().slice(0, 5); // HH:mm
  }
}
  

