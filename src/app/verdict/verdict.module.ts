import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerdictPageComponent } from './verdict-page/verdict-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { VerdictRoutingModule } from './verdict-routing.module';

@NgModule({
  declarations: [
    // ResultsComponent,
    // SearchComponent,
    // VerdictPageComponent
  ],
  

  imports: [
    CommonModule,
    VerdictRoutingModule,
    VerdictPageComponent,

  ]
})
export class VerdictModule { }

