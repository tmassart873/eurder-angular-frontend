import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../model/Item";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  item !: Item;

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
  }

  updateItemForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    price: ['', [Validators.required, Validators.min(0)]],
    amountOfStock: ['', [Validators.required, Validators.min(0)]],
    stockUrgency: ''
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.itemService.getItemById(id).pipe(
      tap(item => this.updateItemForm.patchValue(item))
    )
      .subscribe(item => this.item = item);
  }

  updateItem(){
    this.itemService.updateItem(this.activatedRoute.snapshot.paramMap.get('id')!, this.updateItemForm.value).subscribe();
    this.router.navigate([`item-detail/${this.item.id}`]);
    // window.alert(`Successfully updated ${this.item.name} with id = ${this.item.id}`)
  }

  cancel() {
    this.itemService.cancel();
  }

  get name(): FormControl {
    return this.updateItemForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.updateItemForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.updateItemForm.get('price') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.updateItemForm.get('amountOfStock') as FormControl;
  }
}
