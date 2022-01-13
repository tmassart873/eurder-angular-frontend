import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Item} from "../model/Item";
import {environment} from "../../environments/environment";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient, private location: Location) {
    this.url = `${environment.backendUrl}/items`
  }

  getItems():Observable<any>{
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);

  }

  cancel(){
    this.location.back();
  }
}
