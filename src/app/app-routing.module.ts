import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexViewComponent} from "./index-view/index-view.component";
import {TravelResultsComponent} from "./travel-results/travel-results.component";


const routes: Routes = [
  {path: '', component: IndexViewComponent},
  {path: 'travel', component: TravelResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
