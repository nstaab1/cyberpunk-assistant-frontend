/* eslint-disable @typescript-eslint/unbound-method */
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ROCKERBOY_REASONS_FOR_LEAVING_GROUP,
  ROCKERBOY_TYPES,
  ROCKER_BOY_ENEMIES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-rockerboy-lifepath',
  templateUrl: './rockerboy-lifepath.component.html',
  styleUrls: ['./rockerboy-lifepath.component.scss'],
})
export class RockerboyLifepathComponent implements OnInit {
  @Output() rockerBoyChange = new EventEmitter<FormGroup>();
  rockerBoyLifepath: FormGroup;
  rockerboyTypes = ROCKERBOY_TYPES;
  reasonsForLeaving = ROCKERBOY_REASONS_FOR_LEAVING_GROUP;
  rockerboyEnemies = ROCKER_BOY_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rockerBoyLifepath = this.fb.group({
      rockerboyType: ['', Validators.required],
      groupOrSolo: ['', Validators.required],
      oncePartOfAGroup: [null, Validators.required],
      reasonForLeaving: '',
      performanceLocation: ['', Validators.required],
      rockerboyEnemy: ['', Validators.required],
    });

    this.rockerBoyLifepath.valueChanges.subscribe(() => {
      this.rockerBoyChange.emit(this.rockerBoyLifepath);
    });

    this.rockerBoyLifepath
      .get('oncePartOfAGroup')
      .valueChanges.subscribe((val) => {
        if (val === 'true') {
          this.rockerBoyLifepath
            .get('reasonForLeaving')
            .setValidators([Validators.required]);
          this.rockerBoyLifepath
            .get('reasonForLeaving')
            .updateValueAndValidity();
        } else {
          this.rockerBoyLifepath.get('reasonForLeaving').clearValidators();
          this.rockerBoyLifepath
            .get('reasonForLeaving')
            .updateValueAndValidity();
        }
      });
  }

  previouslyInAGroup(): boolean {
    return this.rockerBoyLifepath.get('oncePartOfAGroup').value === 'true';
  }
}
