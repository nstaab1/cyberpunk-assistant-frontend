import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PERSONALITY_OPTIONS,
  CLOTHING_STYLES,
  HAIRSTYLES,
  AFFECTATIONS,
  MOST_VALUED_THING,
  FEEL_ABOUT_MOST_PEOPLE,
  MOST_VALUED_PERSON,
  MOST_VALUED_POSSESSION,
  ORIGINAL_FAMILY_BACKGROUNDS,
  CHILDHOOD_ENVIRONMENTS,
  FAMILY_CRISES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-lifepath',
  templateUrl: './lifepath.component.html',
  styleUrls: ['./lifepath.component.scss'],
})
export class LifepathComponent implements OnInit {
  @Input() lifepath: FormGroup;

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

  constructor() {}

  ngOnInit() {}
}
