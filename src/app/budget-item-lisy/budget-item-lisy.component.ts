import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-lisy',
  templateUrl: './budget-item-lisy.component.html',
  styleUrls: ['./budget-item-lisy.component.scss']
})
export class BudgetItemLisyComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item){
    // show the edit model 
      const dialogRef = this.dialog.open(EditItemModelComponent, {
        width: '580px',
        data: item
      });
      
      dialogRef.afterClosed().subscribe(result => {
        // check if result has a value
        if (result) {
          this.update.emit({
            old: item,
            new: result
          });
        }
      })
    }
  
  }
  
  
  export interface UpdateEvent {
    old: BudgetItem;
    new: BudgetItem;
  }
  