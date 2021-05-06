import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

@Input() item: BudgetItem;
@Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

isNewItem: boolean;

constructor() { }

ngOnInit() {
  // if item has a value
  if (this.item) {
    // this means that an existing item object was passed into this component
    // therefore this is not a new item
    this.isNewItem = false;
  } else {
    this.isNewItem = true;
    this.item = new BudgetItem('', null);
  }
}

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
