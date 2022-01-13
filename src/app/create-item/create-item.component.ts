import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  addItemForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    price: ['', [Validators.required, Validators.min(0)]],
    amountOfStock: ['', [Validators.required, Validators.min(0)]],
    stockUrgency: ''
  });

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemService.addItem(this.addItemForm.value).subscribe();
    this.router.navigate(['/items']);
  }

  cancel() {
    this.itemService.cancel();
  }

  get name(): FormControl {
    return this.addItemForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.addItemForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.addItemForm.get('price') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.addItemForm.get('amountOfStock') as FormControl;
  }
}
