import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http: HttpClient) {
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
    return this.http.get<Customer>(`${this.url}/${id}`);
  }
}
