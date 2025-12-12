import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicePageComponent } from './advice-page.component';

describe('AdvicePageComponent', () => {
  let component: AdvicePageComponent;
  let fixture: ComponentFixture<AdvicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvicePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
