import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../model/Item";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item


  constructor(private itemService: ItemService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getItemById();
  }

  getItemById(): void{
    const itemId = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.itemService.getItemById(itemId).subscribe(item => this.item = item);
  }

  back(){
    this.itemService.back();
  }

}
