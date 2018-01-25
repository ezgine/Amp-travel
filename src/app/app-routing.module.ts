import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexViewComponent} from "./index-view/index-view.component";


const routes: Routes = [
  {path: '', component: IndexViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
