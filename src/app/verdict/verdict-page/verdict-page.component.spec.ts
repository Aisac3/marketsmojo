import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictPageComponent } from './verdict-page.component';

describe('VerdictPageComponent', () => {
  let component: VerdictPageComponent;
  let fixture: ComponentFixture<VerdictPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdictPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
