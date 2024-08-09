import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerdictPageComponent } from './verdict-page/verdict-page.component'; // Standalone component
import { ResultsComponent } from './results/results.component'; // Standalone component
import { SearchComponent } from './search/search.component'; // Standalone component

const routes: Routes = [
  { path: '', component: VerdictPageComponent }, // Route to VerdictPageComponent
  { path: 'results', component: ResultsComponent }, // Route to ResultsComponent
  { path: 'search', component: SearchComponent } // Route to SearchComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerdictRoutingModule { }
