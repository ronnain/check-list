import { Component, OnInit } from '@angular/core';
import { CheckListService } from '../services/check-list.service';

@Component({
  selector: 'print-btn',
  templateUrl: './print-btn.component.html',
  styleUrls: ['./print-btn.component.scss']
})
export class PrintBtnComponent implements OnInit {

  constructor(private checkListService: CheckListService) { }

  ngOnInit(): void {
  }

  print() {
    const currentDate = new Date();
    const day = [currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()];
    document.title = 'checkList-'+ day.join('_');
    this.saveCurrentCheckList();
    window.print();
  }

  saveCurrentCheckList() {
    this.checkListService.saveCheckList();
  }
}
