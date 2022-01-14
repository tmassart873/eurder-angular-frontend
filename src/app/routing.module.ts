import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemListComponent} from "./item-list/item-list.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {UpdateItemComponent} from "./update-item/update-item.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch:'full'},
  {path: 'items', component: ItemListComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path:'item-detail/:id',component:ItemDetailComponent},
  {path:'update-item/:id',component:UpdateItemComponent},
  {path:'customers',component:CustomerListComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
