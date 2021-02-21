import { Component, OnInit, Renderer2 } from '@angular/core';
import { CheckListService } from '../services/check-list.service';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'print-btn',
  templateUrl: './print-btn.component.html',
  styleUrls: ['./print-btn.component.scss']
})
export class PrintBtnComponent implements OnInit {
  constructor(
    private checkListService: CheckListService,
    private printer: Printer,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log("printer", this.printer);
  }

  print() {
    const currentDate = new Date();
    const day = [currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()];
    document.title = 'checkList-'+ day.join('_');
    this.saveCurrentCheckList();
    console.log("window.print()", window.document);

    window.print();

    this.printer.isAvailable().then((onSuccess) => {
      console.log("success available printer");

      let options: PrintOptions = {
        name: document.title,
        duplex: true
      }

      this.printer.print().then((onSuccess) => {
        console.log("print success");
      }, (err) => {
        console.log('Error pas pribt', err);
      });
    }
    , (err) => {
      console.log('Error pas available', err);
    });
  }

  saveCurrentCheckList() {
    this.checkListService.saveCheckList();
  }
}
