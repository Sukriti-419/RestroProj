import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingRequest } from '../models/booking-request';
import { BookingService } from '../services/booking.service'; 

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})

export class TableBookingComponent {
  bookings: BookingRequest[] = [];
  cancelDisabled = false;
  cancelTimeout: any;
  openTime: string = '00:00';
  closeTime: string = '23:59';

  selectedRestId: number | null = null; // Add this property for restaurant selection
  currentUserId: number | null = null;  // Add this property for current user/session

 bookingDetails = this.formBuilder.group({
  email: new FormControl<string>('', [Validators.required, Validators.email]),
  restaurantName: new FormControl<string>('', [Validators.required]),
  bookingDate: new FormControl<string>('', Validators.required),
  bookingTime: new FormControl<string>('', Validators.required),
    people: new FormControl<number>(1, [Validators.required, Validators.min(1)]) // <-- set to 1

});



   constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute ,
     private router: Router
   
  ) {}

  ngOnInit() {
  const queryParams = this.route.snapshot.queryParams;
  this.openTime = queryParams['opentime'] || '00:00';
  this.closeTime = queryParams['closetime'] || '23:59';
  this.selectedRestId = queryParams['restid'] ? Number(queryParams['restid']) : null;

  // Patch restaurant name from query params
  if (queryParams['restaurantName']) {
    this.bookingDetails.patchValue({ restaurantName: queryParams['restaurantName'] });
  }

  // Patch email from localStorage or user session
  const savedEmail = localStorage.getItem('userEmail') || '';
  if (savedEmail) {
    this.bookingDetails.patchValue({ email: savedEmail });
  }
}

  isTimeValid(): boolean {
    const bookingTime = this.bookingDetails.controls['bookingTime'].value;
    if (!bookingTime) return true;
    return bookingTime >= this.openTime && bookingTime <= this.closeTime;
  }



  onBook() {
  if (!this.isTimeValid()) {
    alert(`Booking time must be between ${this.openTime} and ${this.closeTime}.`);
    return;
  }

  if (this.bookingDetails.valid) {
    const bookingRequest = this.bookingDetails.value as BookingRequest;

     bookingRequest.people = Number(bookingRequest.people);

    if (isNaN(bookingRequest.people) || bookingRequest.people < 1) {
      alert('Please enter a valid number of people.');
      return;
    }
    this.bookings.push({ ...bookingRequest }); // Add booking first
    localStorage.setItem('userBookings', JSON.stringify(this.bookings)); // Then save

    this.bookingService.createBooking(bookingRequest).subscribe(
      () => {
        this.cancelDisabled = false;
        if (this.cancelTimeout) clearTimeout(this.cancelTimeout);
        this.cancelTimeout = setTimeout(() => {
          this.cancelDisabled = true;
        }, 60000);
        alert('Successfully Booked!');
      },
      (error) => {
        alert('Booking failed!');
      }
    );
  }
}



cancelBooking(index: number) {
 // this.bookings.splice(index, 1);
  //localStorage.setItem('userBookings', JSON.stringify(this.bookings)); // Save after removal
  this.cancelDisabled = false;
  if (this.cancelTimeout) clearTimeout(this.cancelTimeout);
}


 }
