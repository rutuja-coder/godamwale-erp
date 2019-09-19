import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingserviceComponent } from './listingservice.component';

describe('ListingserviceComponent', () => {
  let component: ListingserviceComponent;
  let fixture: ComponentFixture<ListingserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
