import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'check-list';

  is_a_new_day: boolean = false; // Use to know if it is a new day (reset some fields)

  // to do save champs appris aujourd'hui
  checkList:any;
  constructor(private storageService:StorageService) {
  }

  ngOnInit(): void {
    this.checkList= this.storageService.retrieveChecklist();
    this.checkNewDay();
    this.updateCounter();
    this.updateCheckBox();
    this.updateGoals();

    this.storageService.setCheckList(this.checkList);
  }

  /**
   * Check if it is a new day
   */
  checkNewDay() {
    const currentDate = new Date();
    const checkListDate = new Date(this.checkList.date);

    if (!this.checkList.date || (checkListDate.getTime() < currentDate.getTime() && checkListDate.getDay() < currentDate.getDay())) {
      this.checkList.date = new Date();
      this.is_a_new_day = true;
    }
  }

  /**
   * Increment counter if it is a new day
   */
  updateCounter() {
    if (this.is_a_new_day) {
      this.checkList.counter ++;
    }
  }

  /**
   * Reset check boxs if it is a new day
   */
  updateCheckBox() {
    if (!this.checkList.checkBox || this.is_a_new_day) {
      this.checkList.checkBox = {};
    }
  }

  /**
   * Reset goals if it is a new day
   */
  updateGoals() {
    if (!this.checkList.goals || this.is_a_new_day) {
      this.checkList.goals = {goalsList:['','','']};
    }
  }
}
