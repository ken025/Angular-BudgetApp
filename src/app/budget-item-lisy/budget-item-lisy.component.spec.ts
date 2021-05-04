import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemLisyComponent } from './budget-item-lisy.component';

describe('BudgetItemLisyComponent', () => {
  let component: BudgetItemLisyComponent;
  let fixture: ComponentFixture<BudgetItemLisyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemLisyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemLisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
