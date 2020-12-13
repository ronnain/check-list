import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.scss']
})
export class NewHabitComponent implements OnInit {

  @Output() newHabitChange = new EventEmitter<string>();

  @Input() newHabit: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  changeHabit() {
    this.newHabitChange.emit(this.newHabit);
  }

}
