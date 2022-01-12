import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';
import {LayoutModule} from "./layout/layout.module";
import {ItemListComponent} from './item-list/item-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
