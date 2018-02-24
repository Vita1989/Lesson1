import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppratesComponent } from './apprates.component';

describe('AppratesComponent', () => {
  let component: AppratesComponent;
  let fixture: ComponentFixture<AppratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
