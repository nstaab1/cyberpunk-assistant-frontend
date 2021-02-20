import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LIFE_GOALS } from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-life-goals',
  templateUrl: './life-goals.component.html',
  styleUrls: ['./life-goals.component.scss'],
})
export class LifeGoalsComponent implements OnInit {
  @Input() lifeGoals: FormGroup;
  lifeGoalData = LIFE_GOALS;

  constructor() {}

  ngOnInit() {}
}
