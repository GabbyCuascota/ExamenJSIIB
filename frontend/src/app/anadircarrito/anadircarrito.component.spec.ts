import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadircarritoComponent } from './anadircarrito.component';

describe('AnadircarritoComponent', () => {
  let component: AnadircarritoComponent;
  let fixture: ComponentFixture<AnadircarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadircarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadircarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
