import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  customer:Customer = new Customer();
  errorMessage?:string = "please complete all field to submit"
  validationMessage?:string = "Now you can submit ";
  constructor( private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  signUpCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data);
      this.goToSignIn();
  },
    error => console.log(error));
  }

  goToSignIn(){
    this.router.navigate(['signIn']);
  }
  goToSignUp(){
    this.router.navigate(['signUp']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }

  onSubmit(){
    this.signUpCustomer();
  }

}
