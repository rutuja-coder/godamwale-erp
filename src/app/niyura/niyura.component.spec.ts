import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiyuraComponent } from './niyura.component';

describe('NiyuraComponent', () => {
  let component: NiyuraComponent;
  let fixture: ComponentFixture<NiyuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiyuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiyuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
