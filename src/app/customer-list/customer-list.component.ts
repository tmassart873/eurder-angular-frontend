import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers: Customer[] = []
  searchedCustomerLastName !: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    console.log(this.customers);
  }


}
