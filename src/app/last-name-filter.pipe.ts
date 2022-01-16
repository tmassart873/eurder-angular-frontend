import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./model/Customer";

@Pipe({
  name: 'lastNameFilter'
})
export class LastNameFilterPipe implements PipeTransform {

  transform(customers: Customer[],filter?:string): Customer[] {
    if(filter === undefined){
      return customers;
    }
    return customers.filter(customer => customer.lastname.toLowerCase().startsWith(filter.toLowerCase()));
  }

}




