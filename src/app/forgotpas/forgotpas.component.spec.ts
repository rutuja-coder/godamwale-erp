import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasComponent } from './forgotpas.component';

describe('ForgotpasComponent', () => {
  let component: ForgotpasComponent;
  let fixture: ComponentFixture<ForgotpasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
