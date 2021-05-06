import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item-lisy',
  templateUrl: './budget-item-lisy.component.html',
  styleUrls: ['./budget-item-lisy.component.scss']
})
export class BudgetItemLisyComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
