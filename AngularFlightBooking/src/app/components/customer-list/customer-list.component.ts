import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  searchText: any;

  customer!:Customer[];
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
  this.customerService.getCustomer().subscribe(data => {
    this.customer = data;
  })
  }
  goToUpdateCustomer(id:number){
    this.router.navigate(['customerUpdate',id]);
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
