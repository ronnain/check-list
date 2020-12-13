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
    this.onPrinting.emit();
    window.print();
  }

}
