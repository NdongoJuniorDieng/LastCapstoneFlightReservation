import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listFlight!:Booking[];
  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.getBookingList();
  }

  goToFlightList(){
    this.router.navigate(['flightList']);
  }
  goToOnlyFlight(){
    this.router.navigate(['onlyFlight']);
  }
  goToCustomer(){
    this.router.navigate(['customer']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }

  private getBookingList(){
    this.bookingService.getBooking().subscribe(data => {
      this.listFlight = data;
    }); 
  }

}
