import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  EXEC_BOSS_RELATIONSHIPS,
  EXEC_CORP_ETHICS,
  EXEC_CORP_LOCATIONS,
  EXEC_DIVISIONS,
  EXEC_ENEMIES,
  EXEC_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-exec-lifepath',
  templateUrl: './exec-lifepath.component.html',
  styleUrls: ['./exec-lifepath.component.scss'],
})
export class ExecLifepathComponent implements OnInit {
  @Output() execChange = new EventEmitter<FormGroup>();
  execLifepath: FormGroup;

  execTypes = EXEC_TYPES;
  execDivisions = EXEC_DIVISIONS;
  execCorpEthicsList = EXEC_CORP_ETHICS;
  execCorpLocations = EXEC_CORP_LOCATIONS;
  execEnemies = EXEC_ENEMIES;
  execBossRelationships = EXEC_BOSS_RELATIONSHIPS;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.execLifepath = this.fb.group({
      execType: ['', Validators.required],
      execDivision: ['', Validators.required],
      execCorpEthics: ['', Validators.required],
      execCorpLocation: ['', Validators.required],
      execEnemy: ['', Validators.required],
      execBossRelationship: ['', Validators.required],
    });

    this.execLifepath.valueChanges.subscribe(() => {
      this.execChange.emit(this.execLifepath);
    });
  }
}
