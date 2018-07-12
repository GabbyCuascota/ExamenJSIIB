import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosphComponent } from './modelosph.component';

describe('ModelosphComponent', () => {
  let component: ModelosphComponent;
  let fixture: ComponentFixture<ModelosphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
