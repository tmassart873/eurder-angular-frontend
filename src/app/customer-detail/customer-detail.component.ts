import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer!: Customer

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(id).subscribe(customer => this.customer = customer);
  }

}
