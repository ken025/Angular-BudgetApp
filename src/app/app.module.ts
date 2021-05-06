
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddFormComponent } from './add-form/add-form.component';
import { BudgetItemLisyComponent } from './budget-item-lisy/budget-item-lisy.component';
import { BudgetItemCardComponent } from './budget-item-lisy/budget-item-card/budget-item-card.component';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddFormComponent,
    BudgetItemLisyComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }