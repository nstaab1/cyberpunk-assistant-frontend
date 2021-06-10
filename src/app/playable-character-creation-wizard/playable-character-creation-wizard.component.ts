/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  playerStatistics: FormGroup;
  isEditable = false;

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

    this.demographics.get('role').valueChanges.subscribe((val) => {
      switch (val) {
        case 'Rockerboy':
          this.roleLifePath = this.fb.group({
            rockerboyType: ['', Validators.required],
            groupOrSolo: ['', Validators.required],
            oncePartOfAGroup: [false, Validators.required],
            reasonForLeaving: '',
            performanceLocation: ['', Validators.required],
            rockerboyEnemy: ['', Validators.required],
          });
          break;
        case 'Solo':
          this.roleLifePath = this.fb.group({
            soloType: ['', Validators.required],
            moralCompass: ['', Validators.required],
            operationalTerritory: ['', Validators.required],
            soloEnemy: ['', Validators.required],
          });
          break;
        case 'Netrunner':
          this.roleLifePath = this.fb.group({
            netrunnerType: ['', Validators.required],
            hasPartner: [false, Validators.required],
            netrunnerPartner: '',
            netrunnerWorkspace: ['', Validators.required],
            netrunnerClient: ['', Validators.required],
            netrunnerProgramProvider: ['', Validators.required],
            netrunnerEnemy: ['', Validators.required],
          });
          break;
        case 'Tech':
          this.roleLifePath = this.fb.group({
            techType: ['', Validators.required],
            hasPartner: [false, Validators.required],
            techPartner: '',
            techWorkspace: ['', Validators.required],
            techClient: ['', Validators.required],
            techSupplier: ['', Validators.required],
            techEnemy: ['', Validators.required],
          });
          break;
        case 'Medtech':
          this.roleLifePath = this.fb.group({
            medtechType: ['', Validators.required],
            hasPartner: [false, Validators.required],
            medtechPartner: ['', Validators.required],
            medtechWorkspace: ['', Validators.required],
            medtechClient: ['', Validators.required],
            medtechSupplier: ['', Validators.required],
          });
          break;
        case 'Media':
          this.roleLifePath = this.fb.group({
            mediaType: ['', Validators.required],
            mediaDistribution: ['', Validators.required],
            mediaEthics: ['', Validators.required],
            mediaStoryType: ['', Validators.required],
          });
          break;
        case 'Exec':
          this.roleLifePath = this.fb.group({
            execType: ['', Validators.required],
            execDivision: ['', Validators.required],
            execCorpEthics: ['', Validators.required],
            execCorpLocation: ['', Validators.required],
            execEnemy: ['', Validators.required],
            execBossRelationship: ['', Validators.required],
          });
          break;
        case 'Lawman':
          this.roleLifePath = this.fb.group({
            lawmanPosition: ['', Validators.required],
            lawmanJurisdiction: ['', Validators.required],
            lawmanGroupCorruption: ['', Validators.required],
            lawmanEnemies: ['', Validators.required],
            lawmanTarget: ['', Validators.required],
          });
          break;
        case 'Fixer':
          this.roleLifePath = this.fb.group({
            fixerType: ['', Validators.required],
            hasPartner: [false, Validators.required],
            fixerPartner: ['', Validators.required],
            fixerOffice: ['', Validators.required],
            fixerSideClients: ['', Validators.required],
            fixerEnemies: ['', Validators.required],
          });
          break;
        case 'Nomad':
          this.roleLifePath = this.fb.group({
            packSize: ['', Validators.required],
            packType: ['', Validators.required],
            packOperation: ['', Validators.required],
            nomadPackRole: ['', Validators.required],
            nomadPackPhilosophy: ['', Validators.required],
            nomadEnemies: ['', Validators.required],
          });
          break;
        default:
        // code block
      }
    });
    // TODO: Add validator so that no stat is higher than 8 or lower than 2
    this.playerStatistics = this.fb.group({
      intelligence: [null, Validators.required],
      willpower: [null, Validators.required],
      cool: [null, Validators.required],
      empathy: [null, Validators.required],
      technique: [null, Validators.required],
      reflexes: [null, Validators.required],
      luck: [null, Validators.required],
      body: [null, Validators.required],
      dexterity: [null, Validators.required],
      movement: [null, Validators.required],
    });
  }

  roleLifePathChange(roleLifePath: FormGroup): void {
    this.roleLifePath = roleLifePath;
  }

  showFormControl(): void {
    console.log(this.roleLifePath);
  }
}
