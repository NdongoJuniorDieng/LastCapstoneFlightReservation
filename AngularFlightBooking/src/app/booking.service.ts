import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  //For get()
  private baseURL = "http://localhost:8080/booking";
  //For post()
  private baseURL1 = "http://localhost:8080/booking/create";
  //For put()
  private baseURL3 = "http://localhost:8080/booking/update";
  //For delete()
  private baseURL2 = "http://localhost:8080/booking/delete";

  constructor(private httpClient:HttpClient) { }

  getBooking(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }
  createBooking(booking:Booking): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,booking);
}

  getBookingById(id:number): Observable<Booking>{
    return this.httpClient.get<Booking>(`${this.baseURL}/${id}`);
  }

  updateBooking(id: number,booking: Booking):Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`,booking);
  }

  deleteBooking(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
  }

}
