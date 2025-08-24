import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingRequest } from '../models/booking-request';
import { BookingService } from '../services/booking.service'; 

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})
export class TableBookingComponent {
  bookingRequest!: BookingRequest;

  bookingDetails = this.formBuilder.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl<string>('', [
    Validators.required,
    Validators.pattern(/^[1-9][0-9]{9}$/) 
    ]),
    restaurantName: new FormControl<string>('', [Validators.required]),
    bookingDate: new FormControl<string>('', Validators.required),
    bookingTime: new FormControl<string>('', Validators.required),
    headCount: new FormControl<number>(0, [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService) {}

  onBook() {
    console.log('Booking Form Values:', this.bookingDetails.value);
    if (this.bookingDetails.valid) {
      this.bookingRequest = new BookingRequest();
      this.bookingRequest.bookingDate = this.bookingDetails.value.bookingDate ?? '';
      this.bookingRequest.bookingTime = this.bookingDetails.value.bookingTime ?? '';
      this.bookingRequest.headCount = this.bookingDetails.value.headCount ?? 0;
      this.bookingRequest.email = this.bookingDetails.value.email ?? '';
      this.bookingRequest.restaurantName = this.bookingDetails.value.restaurantName ?? '';
      this.bookingRequest.phoneNumber = this.bookingDetails.value.phoneNumber ?? '';
  
      this.bookingService.createBooking(this.bookingRequest);
    }
  }
}