import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuctionPageComponent } from './add-auction-page.component';

describe('AddAuctionPageComponent', () => {
  let component: AddAuctionPageComponent;
  let fixture: ComponentFixture<AddAuctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAuctionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAuctionPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
