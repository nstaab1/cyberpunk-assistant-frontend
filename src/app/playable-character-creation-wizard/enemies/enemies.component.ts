/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {
  ENEMY_RELATIONSHIPS,
  ENEMY_CAUSES,
  ENEMY_SIZES,
  ENEMY_REVENGE_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.scss'],
})
export class EnemiesComponent implements OnInit {
  @Input() enemies: FormArray;

  enemyRelationships = ENEMY_RELATIONSHIPS;
  enemyCauses = ENEMY_CAUSES;
  enemySizes = ENEMY_SIZES;
  enemyRevengeTypes = ENEMY_REVENGE_TYPES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public addEnemies(): void {
    this.enemies.push(
      this.fb.group({
        name: '',
        enemyType: '',
        enemyCause: '',
        wrongedParty: '',
        enemySize: '',
        enemyfriends: 0,
        RevengeType: '',
      })
    );
  }

  enemyNeedsDiceRoll(i: string): boolean {
    return i.indexOf('1d') >= 0;
  }
}
