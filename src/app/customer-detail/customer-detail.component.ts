import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer$!: Observable<Customer>

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customer$ = this.customerService.getCustomerById(id);
  }

  back() {
    this.customerService.back();
  }
}
