import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionHandler } from '../classes/change-detection-handler';
import { CheckListService } from '../services/check-list.service';


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent extends ChangeDetectionHandler implements OnInit {

  @Output() onUpdatedCounter = new EventEmitter<number>();

  @Input() counter: number = 0;

  constructor(public checkListService: CheckListService) {
    super(checkListService);
  }

  ngOnInit(): void {
  }

  updateCounter() {
    this.onUpdatedCounter.emit(this.counter);
  }
}