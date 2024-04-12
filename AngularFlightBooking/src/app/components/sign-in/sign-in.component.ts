import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username?:string = '';
  password?: string = '';
  admin!:Admin[];
  customers!:Customer[];
  errorMessage?:string = "error Login try to check your username or password";
  invalid=false;
  constructor(private router:Router,private adminService:AdminService,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getUserAdmin();
    this.getUserCustomer();
  }


ValidateLogin(){
  for(let ctmr of this.customers){
    if(ctmr.username === this.username && ctmr.password === this.password){
        this.router.navigate(['customer']);
    
  }else{
    this.invalid = true;
  }
}

  for(let user of this.admin){
    if(user.username === this.username && user.password === this.password){
       this.router.navigate(['adminPage']);
    }else{
      this.invalid = true;
    }
  }


}

  getUserAdmin(){
    this.adminService.getAdmin().subscribe(data => {
      this.admin = data;
      console.log(this.admin);
    },error => console.log(error))
  }

  getUserCustomer(){
    this.customerService.getCustomer().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    },error => console.log(error))
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

}
