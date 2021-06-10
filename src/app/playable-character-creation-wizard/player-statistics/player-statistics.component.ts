import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrls: ['./player-statistics.component.scss'],
})
export class PlayerStatisticsComponent implements OnInit {
  @Input() playerStatistics: FormGroup;

  constructor() {}

  ngOnInit() {}

  showVal() {
    console.log(this.playerStatistics.value);
  }
}
