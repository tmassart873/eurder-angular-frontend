import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/Item";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient, private router: Router, private location: Location) {
    this.url = `${environment.backendUrl}/items`
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);

  }

  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  updateItem(id: string, value:any): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, value);
  }

  cancel() {
    this.router.navigate(['/items']);
  }

  back() {
    this.location.back();
  }
}
