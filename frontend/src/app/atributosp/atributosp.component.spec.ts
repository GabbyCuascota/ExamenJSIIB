import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributospComponent } from './atributosp.component';

describe('AtributospComponent', () => {
  let component: AtributospComponent;
  let fixture: ComponentFixture<AtributospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
