import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToAdmin(){
    this.router.navigate(['adminPage']);
  }
  goHome(){
    this.router.navigate(['home']);
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

}
