import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  id!:number;
  booking!:Booking;
  constructor(private bookingService:BookingService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.booking = new Booking();
    this.bookingService.getBookingById(this.id).subscribe(data =>{
      this.booking = data;
      console.log(data);
    },error=> console.log(error));
  }

  Update(){
    this.bookingService.updateBooking(this.id,this.booking).subscribe(data =>{
      this.goToBooking();
    },
    error=> console.log(error));
  }

  goToBooking(){
    this.router.navigate(['booking']);
  }

}
