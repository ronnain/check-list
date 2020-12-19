import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  @Input() newHabit:any = {text:''};
  @Input() ideas:any = {ideasList:['']};
  @Input() tasks:any = {taskList:[]};
  @Input() checkBox: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  addIdeas() {
    this.ideas.ideasList.push('');
  }

  removeIdeas(index: number) {
    this.ideas.ideasList.splice(index, 1);
  }

  addTask() {
    this.tasks.taskList.push('');
  }

  removeTask(index: number) {
    this.tasks.taskList.splice(index, 1);
  }

  trackByFn(index:any, item:any) {
    return index;
  }
}