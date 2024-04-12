import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
