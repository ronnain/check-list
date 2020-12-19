import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CheckListService } from './services/check-list.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'check-list';


  /////// to do save champs appris aujourd'hui
  checkList:any;
  constructor(private checkListService:CheckListService) {
  }

  ngOnInit(): void {
    this.checkList= this.checkListService.getChecklist();
  }
}
