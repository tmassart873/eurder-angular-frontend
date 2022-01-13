import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemListComponent} from "./item-list/item-list.component";
import {CreateItemComponent} from "./create-item/create-item.component";

const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'create-item', component: CreateItemComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
