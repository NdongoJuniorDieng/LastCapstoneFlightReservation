import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/purchase';
import { PurchaseService } from 'src/app/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  searchText: any;
  purchase!: Purchase[];
  constructor(private purchaseService:PurchaseService,private router:Router) { }

  ngOnInit(): void {
    this.getPurchase();
  }

  goToAdmin(){
    this.router.navigate(['adminPage']);
  }
  private getPurchase(){
    this.purchaseService.getPurchase().subscribe(data => {
      this.purchase = data;
    });
  }
   
  deletePurchase(id:number){
    this.purchaseService.deletePurchase(id).subscribe(data => {
      console.log(data);
      this.getPurchase();
    });
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goToCustomerList(){
    this.router.navigate(['customerList']);
  }
  goBooking(){
    this.router.navigate(['booking']);
  }
  goListPurchase(){
    this.router.navigate(['purchase']);
}

}
