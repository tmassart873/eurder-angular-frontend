import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  addCustomerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: this.formBuilder.group({
      localPart:  ['', Validators.required],
      domain:  ['', Validators.required],
      complete : ''
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


  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
  }


  addCustomer(): void {
    this.customerService.addCustomer(this.addCustomerForm.value).subscribe();
    this.router.navigate(['/customers']);
  }

  get firstname(): FormControl{
    return this.addCustomerForm.get('firstname') as FormControl;
  }
  get lastname(): FormControl{
    return this.addCustomerForm.get('lastname') as FormControl;
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
    return this.addCustomerForm.get('email') as FormControl;
  }
  get phoneNumber(): FormControl{
    return this.addCustomerForm.get('phoneNumber') as FormControl;
  }
  get address(): FormControl{
    return this.addCustomerForm.get('address') as FormControl;
  }


}
