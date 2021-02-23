import { Component, OnInit } from '@angular/core';
import { CheckListService } from '../services/check-list.service';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'print-btn',
  templateUrl: './print-btn.component.html',
  styleUrls: ['./print-btn.component.scss']
})
export class PrintBtnComponent implements OnInit {

  private previousTitle: string = '';
  private printTitle: string = '';

  constructor(
    private checkListService: CheckListService,
    private printer: Printer,
    private platform: Platform) { }

  ngOnInit(): void {
  }

  print() {
    this.setPrintTitle();
    this.saveCurrentCheckList();

    if (this.platform.is('hybrid')) {
      this.printOnHybridDevice();
    } else {
      document.title = this.printTitle;
      window.print();
      document.title = this.previousTitle;
    }
  }

  private setPrintTitle() {
    const currentDate = new Date();
    const month = (currentDate.getMonth()+1) < 10 ? '0' + (currentDate.getMonth()+1) : currentDate.getMonth()+1;
    const day = [currentDate.getDate(),  month, currentDate.getFullYear()];

    this.previousTitle = document.title;
    this.printTitle = 'checkList-'+ day.join('_');
  }

  private saveCurrentCheckList() {
    this.checkListService.saveCheckList();
  }

  private printOnHybridDevice() {
    this.printer.isAvailable().then((onSuccess) => {

      let options: PrintOptions = {
        name: this.printTitle
      }
      this.printer.print(undefined, options).then((onSuccess) => {
        console.log('Document imprimé.');
      }, (err) => {
        alert("Veuillez nous excuser, une erreur technique est survenue.\nModule d'impression non disponible.\n");
        console.log('Error not print', err);
      });
    }
    , (err) => {
      alert("Veuillez nous excuser, une erreur technique est survenue.\nModule d'imprimante non disponible.\n");
      console.log('Error unavailable printer', err);
    });
  }
}
