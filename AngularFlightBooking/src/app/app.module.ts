import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './components/home/home.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BookingComponent } from './components/booking/booking.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { OnlyFlightComponent } from './components/only-flight/only-flight.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPageComponent,
    CustomerComponent,
    BookingComponent,
    CreateBookingComponent,
    UpdateBookingComponent,
    PurchaseComponent,
    FlightListComponent,
    AddPurchaseComponent,
    SignInComponent,
    SignUpComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    OnlyFlightComponent,
    FlightDetailsComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
