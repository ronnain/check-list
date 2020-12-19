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

  key:string = 'checkList';
  is_a_new_day: boolean = false; // Use to know if it is a new day (reset some fields)

  checkList:any = {
    date: new Date(),
    counter: 1,
    newHabit: {text:'', when:'', valid: {easy:false, motivating:false, rightPlaced:false}},
    rewards: {rewardsList:['','','']},
    ideas: {ideasList:['']},
    tasks: {taskList:[]},
    checkBox: {}
  }

  constructor(private storageService:StorageService) {

  }
  ngOnInit(): void {
    const retrievedData= this.storageService.retrieveData(this.key);

    if(retrievedData) {
      this.checkList = retrievedData;
    }
    this.updateCounter();
    this.updateCheckBox();
  }

  save() {
    this.storageService.save(this.key, this.checkList);
  }

  /**
   * If previous date and not the same day, increment counter
   */
  updateCounter() {
    const currentDate = new Date();
    const checkListDate = new Date(this.checkList.date);
    if (!this.checkList.date || (checkListDate.getTime() < currentDate.getTime() && checkListDate.getDay() < currentDate.getDay())) {
      this.checkList.date = currentDate;
      this.checkList.counter ++;
      this.is_a_new_day = true;
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
}
