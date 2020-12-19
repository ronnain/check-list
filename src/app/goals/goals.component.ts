import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  @Input() goals: any = {goalsList:['','','']};

  constructor() { }

  ngOnInit(): void {
  }

}
