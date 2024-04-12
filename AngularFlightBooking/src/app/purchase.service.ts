import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  //For get
  private baseUrl = "http://localhost:8080/purchase";
  //For post
  private baseUrl1 = "http://localhost:8080/purchase/create";
  //For delete
  private baseUrl2 = "http://localhost:8080/purchase/delete";

  constructor(private httpClient:HttpClient) { }

  getPurchase():Observable<Purchase[]>{
    return this.httpClient.get<Purchase[]>(`${this.baseUrl}`);
  }

  createPurchase(purchase:Purchase): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, purchase);
  }

  getPurchaseById(id:number):Observable<Purchase>{
    return this.httpClient.get<Purchase>(`${this.baseUrl}/${id}`);
  }
  deletePurchase(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${id}`);
  }
}
