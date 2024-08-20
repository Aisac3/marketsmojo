import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiSearchComponent } from './swi-search.component';

describe('SwiSearchComponent', () => {
  let component: SwiSearchComponent;
  let fixture: ComponentFixture<SwiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
