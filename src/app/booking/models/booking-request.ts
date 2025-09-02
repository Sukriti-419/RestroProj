

export class BookingRequest {

  restid: number = 0;
  restaurantName: string = '';
  bookingDate: string = '';
  bookingTime: string = '';
  people: number = 1;
  email: string = '';
  status: BookingStatus = BookingStatus.PENDING; 

}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRM = 'confirm',
  CANCELLED = 'cancelled'
}
