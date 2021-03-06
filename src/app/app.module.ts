import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { GoalsComponent } from './goals/goals.component';
import { CheckListComponent } from './check-list/check-list.component';
import { NewHabitComponent } from './new-habit/new-habit.component';
import { RewardsComponent } from './rewards/rewards.component';
import { FormsModule } from '@angular/forms';
import { PrintBtnComponent } from './print-btn/print-btn.component';
import { Printer } from '@ionic-native/printer/ngx';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    GoalsComponent,
    CheckListComponent,
    NewHabitComponent,
    RewardsComponent,
    PrintBtnComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [Printer],
  bootstrap: [AppComponent]
})
export class AppModule { }
