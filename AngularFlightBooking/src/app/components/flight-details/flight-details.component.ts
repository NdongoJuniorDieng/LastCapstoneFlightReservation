import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight!:Booking;
  id!:number;
  constructor(private route:ActivatedRoute,private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.flight = new Booking();
    this.bookingService.getBookingById(this.id).subscribe(data => {
      this.flight = data;
    })
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

}
