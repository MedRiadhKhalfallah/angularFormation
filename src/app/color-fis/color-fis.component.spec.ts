import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFisComponent } from './color-fis.component';

describe('ColorFisComponent', () => {
  let component: ColorFisComponent;
  let fixture: ComponentFixture<ColorFisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
