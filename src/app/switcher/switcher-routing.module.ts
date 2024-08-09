import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitcherPageComponent } from './switcher-page/switcher-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: SwitcherPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitcherRoutingModule { }
