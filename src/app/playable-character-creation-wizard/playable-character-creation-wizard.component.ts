/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LOVE_AFFAIR_TRAGEDIES } from '../data/player-creators-data';

@Component({
  selector: 'app-playable-character-creation-wizard',
  templateUrl: './playable-character-creation-wizard.component.html',
  styleUrls: ['./playable-character-creation-wizard.component.css'],
})
export class PlayableCharacterCreationWizardComponent implements OnInit {
  demographics: FormGroup;
  lifepath: FormGroup;
  relationships: FormGroup;
  friends: FormArray;
  enemies: FormArray;
  loveAffairs: FormArray;
  lifeGoals: FormGroup;
  roleLifePath: FormGroup;
  isEditable = false;

  loveAffairTragedies = LOVE_AFFAIR_TRAGEDIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.demographics = this.fb.group({
      handle: ['', Validators.required],
      role: ['', Validators.required],
      culturalRegion: ['', Validators.required],
      language: ['', Validators.required],
    });

    this.lifepath = this.fb.group({
      personality: ['', Validators.required],
      clothingStyle: ['', Validators.required],
      hairstyle: ['', Validators.required],
      affectation: ['', Validators.required],
      valueMost: ['', Validators.required],
      feelingAboutPeople: ['', Validators.required],
      mostValuedPerson: ['', Validators.required],
      mostValuedPossession: ['', Validators.required],
      familyBackground: ['', Validators.required],
      childhoodEnvironment: ['', Validators.required],
      familyCrisis: ['', Validators.required],
    });
    this.friends = this.fb.array([
      this.fb.group({
        name: '',
        relationshipToYou: '',
      }),
    ]);
    this.enemies = this.fb.array([
      this.fb.group({
        name: '',
        enemyType: '',
        enemyCause: '',
        wrongedParty: '',
        enemySize: '',
        enemyfriends: 0,
        revengeType: '',
      }),
    ]);
    this.loveAffairs = this.fb.array([
      this.fb.group({
        name: '',
        tragedy: '',
      }),
    ]);

    this.lifeGoals = this.fb.group({
      lifeGoal: ['', Validators.required],
    });

    this.roleLifePath = this.fb.group({
      name: ['', Validators.required],
    });
  }

  public addLoveAffairs(): void {
    this.loveAffairs.push(
      this.fb.group({
        name: '',
        tragedy: '',
      })
    );
  }

  roleLifePathChange(roleLifePath: FormGroup): void {
    this.roleLifePath = roleLifePath;
  }

  showFormControl(): void {
    console.log(this.roleLifePath);
  }
}
