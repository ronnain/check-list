import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Output() onUpdatedCounter = new EventEmitter<number>();

  @Input() counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateCounter() {
    console.log("ici");

    this.onUpdatedCounter.emit(this.counter);
  }
}