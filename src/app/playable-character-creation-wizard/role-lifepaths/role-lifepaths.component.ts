import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LIFE_GOALS } from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-role-lifepaths',
  templateUrl: './role-lifepaths.component.html',
  styleUrls: ['./role-lifepaths.component.scss'],
})
export class RoleLifepathsComponent implements OnInit {
  @Input() roleLifePath: FormGroup;
  @Input() demographics: FormGroup;

  constructor(private fb: FormBuilder) {}
  lifeGoalData = LIFE_GOALS;

  ngOnInit(): void {}
}
