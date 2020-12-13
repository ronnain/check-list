import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.scss']
})
export class NewHabitComponent implements OnInit {

  @Input() newHabit: any = {text:'', when:''};

  constructor() { }

  ngOnInit(): void {
  }
}
