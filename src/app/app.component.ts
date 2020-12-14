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

  checkList:any = {
    counter: 0,
    newHabit: {text:'', when:'', valid: {easy:false, motivating:false, rightPlaced:false}},
    rewards: {rewardsList:['','','']},
    ideas: {ideasList:['']},
    tasks: {taskList:[]}
  }

  constructor(private storageService:StorageService) {

  }
  ngOnInit(): void {
    const retrievedData= this.storageService.retrieveData(this.key);
    if(retrievedData) {
      this.checkList = retrievedData;
    }
  }

  save() {
    this.storageService.save(this.key, this.checkList);
  }
}
