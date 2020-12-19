import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectionHandler } from '../classes/change-detection-handler';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent extends ChangeDetectionHandler implements OnInit {

  @Input() goals: any = {goalsList:['','','']};

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit(): void {
  }

}
