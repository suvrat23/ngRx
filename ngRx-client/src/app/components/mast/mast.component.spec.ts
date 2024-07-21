import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastComponent } from './mast.component';

describe('MastComponent', () => {
  let component: MastComponent;
  let fixture: ComponentFixture<MastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
