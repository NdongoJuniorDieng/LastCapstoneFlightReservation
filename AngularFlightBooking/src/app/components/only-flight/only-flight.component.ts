import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-only-flight',
  templateUrl: './only-flight.component.html',
  styleUrls: ['./only-flight.component.css']
})
export class OnlyFlightComponent implements OnInit {
  searchText: any;
  listFlight!:Booking[];
  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.getBookingList();
  }

  goToFlightList(){
    this.router.navigate(['flightList']);
  }
  goToCustomer(){
    this.router.navigate(['customer']);
  }
  goToCreatePurchase(id:number){
    this.router.navigate(['addPurchase',id]);
  }
  goToOnlyFlight(){
    this.router.navigate(['onlyFlight']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  private getBookingList(){
    this.bookingService.getBooking().subscribe(data => {
      this.listFlight = data;
    }); 
  }

  flightDetails(id:number){
    this.router.navigate(['flightDetails',id]);
  }
}
