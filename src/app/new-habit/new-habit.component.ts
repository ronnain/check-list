import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionHandler } from '../classes/change-detection-handler';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.scss']
})
export class NewHabitComponent extends ChangeDetectionHandler implements OnInit {

  @Input() newHabit: any = {text:'', when:'', valid: {easy:false, motivating:false, rightPlaced:false}};

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit(): void {
  }
}
