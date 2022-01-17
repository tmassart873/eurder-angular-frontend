import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';
import {LayoutModule} from "./layout/layout.module";
import {ItemListComponent} from './item-list/item-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameFilterPipe} from './name-filter.pipe';
import { CreateItemComponent } from './create-item/create-item.component';
import { CharCounterComponent } from './char-counter/char-counter.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LastNameFilterPipe } from './last-name-filter.pipe';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    NameFilterPipe,
    CreateItemComponent,
    CharCounterComponent,
    ItemDetailComponent,
    UpdateItemComponent,
    CustomerListComponent,
    LastNameFilterPipe,
    CreateCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
