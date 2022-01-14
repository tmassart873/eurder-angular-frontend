import {Email} from "./Email";
import {Address} from "./Address";
import {PhoneNumber} from "./PhoneNumber";

export interface Customer {
  id:string;
  firstname:string;
  lastname: string;
  email: Email;
  phoneNumber: PhoneNumber;
  address: Address;
}
