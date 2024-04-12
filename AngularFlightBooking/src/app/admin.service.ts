import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8080/admin";

  constructor(private httpClient:HttpClient) { }

  getAdmin():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`)
  }

}
