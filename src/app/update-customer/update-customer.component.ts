import { Component, OnInit } from '@angular/core';
import {Observable, tap} from "rxjs";
import {Customer} from "../model/Customer";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer!: Customer

  constructor(private customerService:CustomerService,
              private formBuilder:FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  updateCustomerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: this.formBuilder.group({
      localPart:  ['', Validators.required],
      domain:  ['', Validators.required]
    }),
    phoneNumber: this.formBuilder.group({
      countryCallingCode:  ['', Validators.required],
      number:  ['', Validators.required]
    }),
    address: this.formBuilder.group({
      streetName: ['', Validators.required],
      houseNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    })
  });


  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(id).pipe(
      tap(customer => this.customer = customer)
    ).subscribe(customer => this.updateCustomerForm.patchValue(customer));
  }

  getCustomerById(){
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(id);
  }

  updateCustomer(){
    this.customerService.updateItem(this.activatedRoute.snapshot.paramMap.get('id')!, this.updateCustomerForm.value).subscribe();
    this.router.navigate([`customer-detail/${this.customer.id}`]);
  }

  get firstname(): FormControl{
    return this.updateCustomerForm.get('firstname') as FormControl;
  }
  get lastname(): FormControl{
    return this.updateCustomerForm.get('lastname') as FormControl;
  }
  get localPart(): FormControl{
    return this.email.get('localPart') as FormControl;
  }
  get domain(): FormControl{
    return this.email.get('domain') as FormControl;
  }
  get countryCallingCode(): FormControl{
    return this.phoneNumber.get('countryCallingCode') as FormControl;
  }
  get number(): FormControl{
    return this.phoneNumber.get('number') as FormControl;
  }

  get streetName(): FormControl{
    return this.address.get('streetName') as FormControl;
  }
  get houseNumber(): FormControl{
    return this.address.get('houseNumber') as FormControl;
  }
  get postalCode(): FormControl{
    return this.address.get('postalCode') as FormControl;
  }
  get country(): FormControl{
    return this.address.get('country') as FormControl;
  }
  get email(): FormControl{
    return this.updateCustomerForm.get('email') as FormControl;
  }
  get phoneNumber(): FormControl{
    return this.updateCustomerForm.get('phoneNumber') as FormControl;
  }
  get address(): FormControl{
    return this.updateCustomerForm.get('address') as FormControl;
  }

  cancel() {
    this.router.navigate([`/customer-detail/${this.customer.id}`])
  }
}
