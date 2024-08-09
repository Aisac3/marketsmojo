import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherPageComponent } from './switcher-page/switcher-page.component';
import { SwitcherRoutingModule } from './switcher-routing.module';

@NgModule({
  
  imports: [
    CommonModule,
    SwitcherRoutingModule
  ]
})
export class SwitcherModule { }
