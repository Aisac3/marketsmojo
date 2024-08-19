import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitcherPageComponent } from './switcher-page/switcher-page.component';
import { SwiSearchComponent } from './swi-search/swi-search.component';
const routes: Routes = [
  
    { path: '', component: SwitcherPageComponent },
    { path: 'swisearch', component: SwiSearchComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitcherRoutingModule { }
