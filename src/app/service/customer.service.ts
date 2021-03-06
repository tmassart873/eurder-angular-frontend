import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Customer} from "../model/Customer";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http: HttpClient,private location:Location) {
    this.url = `${environment.backendUrl}/customers`
  }

  getCustomers(): Observable<any> {
    return this.http.get<Customer[]>(this.url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this.url, customer);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`).pipe(tap(customer => console.log(customer)));
  }

  updateItem(id: string, value: any): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, value);
  }

  back() {
    this.location.back();
  }
}
