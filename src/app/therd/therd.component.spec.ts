import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherdComponent } from './therd.component';

describe('TherdComponent', () => {
  let component: TherdComponent;
  let fixture: ComponentFixture<TherdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
