import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-verdict-page',
  standalone: true,
  imports: [SearchComponent,ResultsComponent],
  templateUrl: './verdict-page.component.html',
  styleUrl: './verdict-page.component.css'
})
export class VerdictPageComponent {
  selectedOption: any = null;
  onSuggestionSelected(entry: any) {
    this.selectedOption = entry;
  }

onClose() {
  this.selectedOption = null;
  // this.selectedOptionData = null;
}

}