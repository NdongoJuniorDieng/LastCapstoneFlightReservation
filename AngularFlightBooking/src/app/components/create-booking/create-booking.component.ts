import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  bookings:Booking = new Booking();
  errorMessage?:string = "please complete all field to submit"
  validationMessage?:string = "Now you can submit ";
  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
  }

  saveBooking(){
    this.bookingService.createBooking(this.bookings).subscribe(data =>{
      console.log(data);
      this.goBooking();
  },
error => console.log(error));
  }

  goBooking(){
    this.router.navigate(['booking']);
  }
  onSubmit(){
    console.log(this.bookings);
    this.saveBooking();
  }

}
