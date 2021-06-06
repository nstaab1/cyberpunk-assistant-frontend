/* eslint-disable @typescript-eslint/unbound-method */
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SOLO_ENEMIES,
  SOLO_MORAL_COMPASSES,
  SOLO_TERRITORIES,
  SOLO_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-solo-lifepath',
  templateUrl: './solo-lifepath.component.html',
  styleUrls: ['./solo-lifepath.component.scss'],
})
export class SoloLifepathComponent implements OnInit {
  @Output() soloChange = new EventEmitter<FormGroup>();
  soloLifepath: FormGroup;
  soloTypes = SOLO_TYPES;
  soloMoralCompases = SOLO_MORAL_COMPASSES;
  operationalTerritories = SOLO_TERRITORIES;
  soloEnemies = SOLO_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('Solo initialized');
    this.soloLifepath = this.fb.group({
      soloType: ['', Validators.required],
      moralCompass: ['', Validators.required],
      operationalTerritory: ['', Validators.required],
      soloEnemy: ['', Validators.required],
    });

    this.soloLifepath.valueChanges.subscribe(() => {
      this.soloChange.emit(this.soloLifepath);
    });
  }
}
