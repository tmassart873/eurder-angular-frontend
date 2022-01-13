import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
  }

  addItemForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required,],
    amountOfStock: ['', Validators.required],
    stockUrgency: ''
  });

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemService.addItem(this.addItemForm.value).subscribe();
    console.log(this.addItemForm.value)
  }

  cancel() {
    this.itemService.cancel();
  }

}
