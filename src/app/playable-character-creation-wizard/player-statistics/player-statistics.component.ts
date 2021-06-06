import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrls: ['./player-statistics.component.scss'],
})
export class PlayerStatisticsComponent implements OnInit {
  @Input() stats: FormGroup;

  constructor() {}

  ngOnInit() {}
}
