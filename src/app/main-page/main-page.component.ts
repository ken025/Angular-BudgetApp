import { UpdateEvent } from './../budget-item-lisy/budget-item-lisy.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // budget items array
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

// method that will run when the form is submitted
addItem(newItem: BudgetItem) {
  this.budgetItems.push(newItem);
  this.totalBudget += newItem.amount;
}

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
  }

  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

     // update the total budget
     this.totalBudget -= updateEvent.old.amount;
     this.totalBudget += updateEvent.new.amount;
  }
}
