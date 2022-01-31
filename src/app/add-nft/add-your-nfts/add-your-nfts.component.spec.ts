import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourNftsComponent } from './add-your-nfts.component';

describe('AddYourNftsComponent', () => {
  let component: AddYourNftsComponent;
  let fixture: ComponentFixture<AddYourNftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourNftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYourNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
