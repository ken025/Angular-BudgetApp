import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

@Input() item: BudgetItem = new BudgetItem('', null);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(BudgetItem)
  }
}
