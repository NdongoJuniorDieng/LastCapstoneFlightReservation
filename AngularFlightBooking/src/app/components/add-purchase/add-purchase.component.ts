import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import { Purchase } from 'src/app/purchase';
import { PurchaseService } from 'src/app/purchase.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  purchase:Purchase = new Purchase();
  id!:number;
  booking!:Booking;
  errorMessage?:string = "please complete all field to submit"
  validationMessage?:string = "Now you can submit ";
  constructor(private purchaseService:PurchaseService,private bookingService:BookingService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.booking = new Booking();
    this.bookingService.getBookingById(this.id).subscribe(data => {
     this.booking = data;
    });
  }
  savePurchase(){
    this.purchaseService.createPurchase(this.purchase).subscribe(data => {
      this.goToCustomer();
      
      if (true) {
        alert("Purchase succesfull,shortly you will receive a confirmation email from the company thank you");
      }

    });
  }
  goToCustomer(){
    this.router.navigate(['customer']);
  }
  goToFlightList(){
    this.router.navigate(['flightList']);
  }
  goToOnlyFlight(){
    this.router.navigate(['onlyFlight']);
  }
 
  goToHome(){
    this.router.navigate(['home']);
  }

  onSubmit(){
    this.savePurchase();
  }


}
