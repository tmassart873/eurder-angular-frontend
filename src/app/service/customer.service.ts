import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http: HttpClient, private router: Router, private location: Location) {
    this.url = `${environment.backendUrl}/customers`
  }

  getCustomers(): Observable<any> {
    return this.http.get<Customer[]>(this.url);
  }

  addCustomer(customer: Customer): Observable<Customer>{
    console.log(customer);
    return this.http.post<Customer>(this.url, customer);
  }
}
