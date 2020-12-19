import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CheckListService {

  is_a_new_day: boolean = false; // Use to know if it is a new day (reset some fields)

  checkListKey: string = 'checkList';
  checkList: any = {
    date: new Date(),
    counter: 1,
    newHabit: {text:'', when:'', valid: {easy:false, motivating:false, rightPlaced:false}},
    goals: {goalsList:['','','']},
    rewards: {rewardsList:['','','']},
    ideas: {ideasList:['']},
    tasks: {taskList:[]},
    checkListFields: {pageCounter: 0, workingTask: ''},
    checkBox: {}
  };

  constructor(private storageService:StorageService) {
   }

  setCheckList(checkList: any) {
    this.checkList = checkList;
  }

  getChecklist() {
    const retieveCheckList = this.storageService.retrieveData(this.checkListKey);
    if (retieveCheckList) {
      this.checkList = retieveCheckList;
    }
    this.updateCheckList();
    return this.checkList;
  }

  updateCheckList() {
    this.checkNewDay();
    this.updateCounter();
    this.updateCheckBox();
    this.updateGoals();
    this.updateCheckListFields();
  }

  saveCheckList() {
    this.storageService.save(this.checkListKey, this.checkList);
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

  /**
   * Reset check list fields if it is a new day
   */
  updateCheckListFields() {
    if (!this.checkList.checkListFields || this.is_a_new_day) {
      this.checkList.checkListFields = {pageCounter: 0, workingTask: ''}
    }
  }
}
