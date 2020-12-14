import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'print-btn',
  templateUrl: './print-btn.component.html',
  styleUrls: ['./print-btn.component.scss']
})
export class PrintBtnComponent implements OnInit {

  @Output() onPrinting = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  print() {
    const currentDate = new Date();
    const day = [currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()];
    document.title = 'checkList-'+ day.join('_');
    this.onPrinting.emit();
    window.print();
  }

}
