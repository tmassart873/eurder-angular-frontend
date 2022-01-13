import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemListComponent} from "./item-list/item-list.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch:'full'},
  {path: 'items', component: ItemListComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path:'item-detail/:id',component:ItemDetailComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
