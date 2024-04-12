import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  searchText: any;
  bookings!: Booking[];
  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.getBooking();
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goCreateBooking(){
    this.router.navigate(['createBooking']);
  }
  goToAdmin(){
    this.router.navigate(['adminPage']);
  }
  goBooking(){
    this.router.navigate(['booking']);
  }
  goListPurchase(){
    this.router.navigate(['purchase']);
  }
  goToCustomerList(){
    this.router.navigate(['customerList']);
  }
  private getBooking(){
    this.bookingService.getBooking().subscribe(data => {
      this.bookings = data;
    }); 
  }

  updateBooking(id:number){
    this.router.navigate(['updateBooking',id]);
  }

  deleteBooking(id:number){
    this.bookingService.deleteBooking(id).subscribe(data => {
      console.log(data);
      this.getBooking();
    });
  }



}
