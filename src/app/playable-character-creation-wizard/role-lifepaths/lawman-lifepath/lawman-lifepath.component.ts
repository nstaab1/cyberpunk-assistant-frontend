import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LAWMAN_ENEMIES_LIST,
  LAWMAN_GROUP_CORRUPTIONS,
  LAWMAN_JURISDICTIONS,
  LAWMAN_POSTIONS,
  LAWMAN_TARGETS,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-lawman-lifepath',
  templateUrl: './lawman-lifepath.component.html',
  styleUrls: ['./lawman-lifepath.component.scss'],
})
export class LawmanLifepathComponent implements OnInit {
  @Output() lawmanChange = new EventEmitter<FormGroup>();
  lawmanLifepath: FormGroup;

  lawmanPositions = LAWMAN_POSTIONS;
  lawmanJurisdictions = LAWMAN_JURISDICTIONS;
  lawmanGroupCorruptions = LAWMAN_GROUP_CORRUPTIONS;
  lawmanEnemiesList = LAWMAN_ENEMIES_LIST;
  lawmanTargets = LAWMAN_TARGETS;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.lawmanLifepath = this.fb.group({
      lawmanPosition: ['', Validators.required],
      lawmanJurisdiction: ['', Validators.required],
      lawmanGroupCorruption: ['', Validators.required],
      lawmanEnemies: ['', Validators.required],
      lawmanTarget: ['', Validators.required],
    });

    this.lawmanLifepath.valueChanges.subscribe(() => {
      this.lawmanChange.emit(this.lawmanLifepath);
    });
  }
}
