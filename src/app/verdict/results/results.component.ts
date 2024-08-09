

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { CompanyData } from '../../data.service'; // Assuming CompanyData is an interface/class in data.service

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  imports: [CommonModule]
})
export class ResultsComponent implements OnChanges, OnInit {
  @Input() selectedOption: any;
  @Output() close = new EventEmitter<void>();

  coverpage: CompanyData | undefined; // Type the coverpage property

  currentDate: Date = new Date();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.selectedOption) { // Check if selectedOption exists
      const id = this.selectedOption.Id; // Assuming Id property in selectedOption
      this.dataService.getData(id).subscribe(data => {
        this.coverpage = data;
        console.log(this.coverpage);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOption'] && changes['selectedOption'].currentValue) {
      console.log('Selected Option:', changes['selectedOption'].currentValue);
      this.ngOnInit(); // Call ngOnInit again to fetch data based on new selectedOption
    }
  }

  closeData() {
       this.close.emit();
     }
}

