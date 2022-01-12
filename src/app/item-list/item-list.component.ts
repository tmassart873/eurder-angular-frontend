import { Component, OnInit } from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void{
    console.log("items");
    console.log(this.items);
    this.itemService.getItems().subscribe(items => this.items = items);
  }


}
