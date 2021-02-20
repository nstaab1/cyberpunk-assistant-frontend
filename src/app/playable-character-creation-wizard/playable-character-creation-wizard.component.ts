import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  AFFECTATIONS,
  CHILDHOOD_ENVIRONMENTS,
  CLOTHING_STYLES,
  CULTURAL_REGIONS,
  ENEMY_CAUSES,
  ENEMY_RELATIONSHIPS,
  ENEMY_REVENGE_TYPES,
  ENEMY_SIZES,
  FAMILY_CRISES,
  FEEL_ABOUT_MOST_PEOPLE,
  FRIEND_RELATIONSHIPS,
  HAIRSTYLES,
  LANGUAGES,
  LIFE_GOALS,
  LOVE_AFFAIR_TRAGEDIES,
  MOST_VALUED_PERSON,
  MOST_VALUED_POSSESSION,
  MOST_VALUED_THING,
  ORIGINAL_FAMILY_BACKGROUNDS,
  PERSONALITY_OPTIONS,
  ROLES,
} from '../data/player-creators-data';

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

  culturalRegions = CULTURAL_REGIONS;
  languages = LANGUAGES;
  languageOptions: Observable<string[]>;
  personalityOptions = PERSONALITY_OPTIONS;
  clothingStyles = CLOTHING_STYLES;
  hairstyles = HAIRSTYLES;
  affectations = AFFECTATIONS;
  mostValuedThingList = MOST_VALUED_THING;
  feelAboutPeopleList = FEEL_ABOUT_MOST_PEOPLE;
  mostValuedPersonList = MOST_VALUED_PERSON;
  mostValuedPossesionList = MOST_VALUED_POSSESSION;
  familyBackgrounds = ORIGINAL_FAMILY_BACKGROUNDS;
  childhoodEnvironments = CHILDHOOD_ENVIRONMENTS;
  familyCrises = FAMILY_CRISES;
  friendRelationships = FRIEND_RELATIONSHIPS;
  enemyRelationships = ENEMY_RELATIONSHIPS;
  enemyCauses = ENEMY_CAUSES;
  enemySizes = ENEMY_SIZES;
  enemyRevengeTypes = ENEMY_REVENGE_TYPES;
  loveAffairTragedies = LOVE_AFFAIR_TRAGEDIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.demographics = this.fb.group({
      handle: ['', Validators.required],
      role: ['', Validators.required],
    });

    // TODO: Clean up these form groups to put them all under lifepath
    this.lifepath = this.fb.group({
      culturalRegion: ['', Validators.required],
      language: ['', Validators.required],
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

    this.languageOptions = this.lifepath.get('language').valueChanges.pipe(
      // startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.languages.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  public addFriend(): void {
    this.friends.push(
      this.fb.group({
        name: '',
        relationshipToYou: '',
      })
    );
  }

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

  public addLoveAffairs(): void {
    this.loveAffairs.push(
      this.fb.group({
        name: '',
        tragedy: '',
      })
    );
  }

  enemyNeedsDiceRoll(i: string): boolean {
    return i.indexOf('1d') >= 0;
  }

  roleLifePathChange(roleLifePath: FormGroup): void {
    this.roleLifePath = roleLifePath;
  }

  showFormControl(): void {
    console.log(this.roleLifePath);
  }
}
