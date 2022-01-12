import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Item} from "../model/Item";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/items`
  }

  getItems():Observable<any>{
    return this.http.get<Item[]>(this.url);
  }
}
