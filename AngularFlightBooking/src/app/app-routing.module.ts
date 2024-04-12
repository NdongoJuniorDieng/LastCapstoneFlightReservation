import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BookingComponent } from './components/booking/booking.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { HomeComponent } from './components/home/home.component';
import { OnlyFlightComponent } from './components/only-flight/only-flight.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';

const routes: Routes = [
  { path:'home' , component:HomeComponent},
  {path:'adminPage' , component:AdminPageComponent},
  {path:'customer' , component:CustomerComponent},
  {path:'booking' , component:BookingComponent},
  {path:'createBooking' , component:CreateBookingComponent},
  {path:'updateBooking/:id' , component:UpdateBookingComponent},
  {path:'purchase' , component:PurchaseComponent},
  {path:'addPurchase/:id' , component:AddPurchaseComponent},
  {path:'flightList' , component:FlightListComponent},
  {path:'onlyFlight' , component:OnlyFlightComponent},
  {path:'flightDetails/:id' , component:FlightDetailsComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp' , component:SignUpComponent},
  {path:'customerList' , component:CustomerListComponent},
  {path:'customerUpdate/:id' , component:CustomerUpdateComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
