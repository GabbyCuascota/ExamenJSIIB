import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarordenComponent } from './completarorden.component';

describe('CompletarordenComponent', () => {
  let component: CompletarordenComponent;
  let fixture: ComponentFixture<CompletarordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletarordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
