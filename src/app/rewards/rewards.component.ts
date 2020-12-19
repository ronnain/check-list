import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectionHandler } from '../classes/change-detection-handler';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent extends ChangeDetectionHandler implements OnInit {

  @Input() rewards: any = {rewardsList:['','','']};

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit(): void {
  }
}
