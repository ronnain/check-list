import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveChecklistSubject = new Subject();
  checkListKey: string = 'checkList';
  checkList: any = {
    date: new Date(),
    counter: 1,
    newHabit: {text:'', when:'', valid: {easy:false, motivating:false, rightPlaced:false}},
    goals: {goalsList:['','','']},
    rewards: {rewardsList:['','','']},
    ideas: {ideasList:['']},
    tasks: {taskList:[]},
    checkBox: {}
  };

  constructor() {
    this.saveChecklistSubject.pipe(
      debounceTime(2000)).subscribe(data => console.log("save"));
   }

  setCheckList(checkList: any) {
    this.checkList = checkList;
  }

  retrieveChecklist() {
    const retieveCheckList = this.retrieveData(this.checkListKey);
    if (retieveCheckList) {
      this.checkList = retieveCheckList;
    }
    return this.checkList;
  }

  saveCheckList() {
    this.save(this.checkListKey, this.checkList);
  }

  save(key:string, object:any) {
    console.log(key, object);

    this.saveInLocalStorage(key, object);
  }

  retrieveData(key:string) {
    return this.retrieveLocalStorage(key);
  }

  private saveInLocalStorage(key:string, object:any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  private retrieveLocalStorage(key:string) {
    const object = localStorage.getItem(key);
    return object ? JSON.parse(object) : null;
  }
}
