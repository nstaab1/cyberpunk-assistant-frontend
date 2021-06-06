/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { LOVE_AFFAIR_TRAGEDIES } from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-love-affairs',
  templateUrl: './love-affairs.component.html',
  styleUrls: ['./love-affairs.component.css'],
})
export class LoveAffairsComponent implements OnInit {
  @Input() loveAffairs: FormArray;

  loveAffairTragedies = LOVE_AFFAIR_TRAGEDIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public addLoveAffairs(): void {
    this.loveAffairs.push(
      this.fb.group({
        name: '',
        tragedy: '',
      })
    );
  }
}
