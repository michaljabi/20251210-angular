import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceDetailsComponent } from './advice-details.component';

describe('AdviceDetailsComponent', () => {
  let component: AdviceDetailsComponent;
  let fixture: ComponentFixture<AdviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
