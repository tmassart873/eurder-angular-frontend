import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FooterComponent} from "./layout/footer/footer.component";
import {ItemListComponent} from "./item-list/item-list.component";

const routes: Routes = [{path: '', component:ItemListComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
