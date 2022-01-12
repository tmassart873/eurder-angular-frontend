import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RoutingModule} from "../routing.module";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class LayoutModule { }
