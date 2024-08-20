import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiResultsComponent } from './swi-results.component';

describe('SwiResultsComponent', () => {
  let component: SwiResultsComponent;
  let fixture: ComponentFixture<SwiResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
