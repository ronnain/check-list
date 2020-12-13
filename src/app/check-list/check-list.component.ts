import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  @Input() newHabit: string ='';

  ideasList: string[] = [''];
  taskList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addIdeas() {
    this.ideasList.push('');
  }

  removeIdeas(index: number) {
    this.ideasList.splice(index, 1);
  }

  addTask() {
    this.taskList.push('');
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1);
  }

}
