import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  addCustomerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    })
  });


  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
  }


  addCustomer(): void {
    this.customerService.addCustomer(this.addCustomerForm.value).subscribe();
    this.router.navigate(['/customers']);
  }

}
