import { Component,Output,OnInit,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiSearchComponent } from '../swi-search/swi-search.component';

import { DataService } from '../../data.service';
@Component({
  selector: 'app-switcher-page',
  standalone: true,
  imports: [FormsModule,CommonModule,SwiSearchComponent],
  templateUrl: './switcher-page.component.html',
  styleUrl: './switcher-page.component.css'
})
export class SwitcherPageComponent implements OnInit {

    searchTermsHome: string = '';
    drophide: boolean = true;
    switcherQuantity: number | null = null;
    switcherSid: number | null = null;


  
     filteredSuggestions:  any[] = [];
    
    @Output() suggestionSelected = new EventEmitter<any>();
    @Output() suggestionsUpdated = new EventEmitter<any[]>();
  
    constructor(private dataService: DataService) {}
  
    ngOnInit(): void {
      
    }
  
    onSearchChange() {
      if (this.searchTermsHome.trim().length > 0) {
        this.dataService.getSuggestions(this.searchTermsHome).subscribe(suggestions => {
          this.filteredSuggestions = suggestions;
          this.drophide = suggestions.length > 0 ? false : true;;
          this.emitSuggestionsUpdated();
        });
      } else {
        this.filteredSuggestions = [];
        this.drophide = true;
        this.emitSuggestionsUpdated();
      }
    }
  
    onFocus() {
      if(this.searchTermsHome.trim().length > 0){
      this.drophide = false;
      }
    }
  
    onBlur() {
      setTimeout(() => {
        this.drophide = true;
      }, 200);
    }
    emitSuggestionsUpdated() {
      this.suggestionsUpdated.emit(this.filteredSuggestions);

    }

    onSelectCompany(entry: any) {
      this.searchTermsHome = '';
      this.drophide = true;
      this.switcherSid = entry.Id;
      this.setSwitcherIds(entry.Id);
    }
  
    onQuantityChange() {
      if (this.switcherQuantity !== null) {
        this.setSwitcherIds(this.switcherSid!, this.switcherQuantity);
      }
    }
    
  
    runSwitcher() {
      if (this.switcherSid !== null && this.switcherQuantity !== null) {
        this.setSwitcherIds(this.switcherSid, this.switcherQuantity);
        this.getQuestionsData(this.switcherQuantity);
      }
    }
    
  
    setSwitcherIds(id: number, quantity?: number) {
      // Implement the logic for setting switcher IDs
      console.log(`Switcher ID: ${id}, Quantity: ${quantity}`);
    }
  
    getQuestionsData(quantity?: number) {
      // Implement the logic to fetch data based on the selected stock and quantity
      console.log(`Running switcher with quantity: ${quantity}`);
    }
}
