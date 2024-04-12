import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = "http://localhost:8080/customer";
  private baseUrl1 = "http://localhost:8080/customer/create";
  private baseUrl2 = "http://localhost:8080/customer/update";

  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }
  createCustomer(customer:Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`,customer);
  }
  getCustomerById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`);
  }
  updateCustomer(id:number,customer:Customer):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl2}/${id}`,customer);
  }
  
}
