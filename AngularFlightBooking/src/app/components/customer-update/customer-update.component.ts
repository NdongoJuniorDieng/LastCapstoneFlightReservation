import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer!:Customer;
  id!:number;

  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customer = new Customer();
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
      console.log(data);
    },error=> console.log(error));
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.id,this.customer).subscribe(data => {
      this.router.navigate(['customerList']);
    },
    error=> console.log(error));
  }

}
