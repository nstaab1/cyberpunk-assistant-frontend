import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ROLES } from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent implements OnInit {
  @Input() demographics: FormGroup;
  roles = ROLES;

  constructor() {}

  ngOnInit(): void {}
}
