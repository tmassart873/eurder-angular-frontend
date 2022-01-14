import {Component, Input, OnInit} from '@angular/core';
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
  @Input() searchedItem!: string;


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  switchWarningIcon(item:Item):string {
    if(item.stockUrgency === 'STOCK_LOW'){
      return "./assets/images/warning-icon-red.png";
    }
    else if(item.stockUrgency === 'STOCK_MEDIUM'){
      return "./assets/images/warning-icon-orange.PNG";
    }
    return "./assets/images/warning-icon.png";
  }
}
