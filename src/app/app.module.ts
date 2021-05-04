import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddFormComponent } from './add-form/add-form.component';
import { BudgetItemLisyComponent } from './budget-item-lisy/budget-item-lisy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddFormComponent,
    BudgetItemLisyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
