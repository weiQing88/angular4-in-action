import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInActionComponent } from './store-in-action.component';

describe('StoreInActionComponent', () => {
  let component: StoreInActionComponent;
  let fixture: ComponentFixture<StoreInActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
