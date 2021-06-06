import { EventEmitter, Output } from '@angular/core';
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NETRUNNER_CLIENTS,
  NETRUNNER_ENEMIES,
  NETRUNNER_PARTNERS,
  NETRUNNER_PROGRAM_PROVIDERS,
  NETRUNNER_TYPES,
  NETRUNNER_WORKSPACES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-netrunner-lifepath',
  templateUrl: './netrunner-lifepath.component.html',
  styleUrls: ['./netrunner-lifepath.component.css'],
})
export class NetrunnerLifepathComponent implements OnInit {
  @Output() netrunnerChange = new EventEmitter<FormGroup>();
  netrunnerLifepath: FormGroup;
  netrunnerTypes = NETRUNNER_TYPES;
  netrunnerPartners = NETRUNNER_PARTNERS;
  netrunnerWorkspaces = NETRUNNER_WORKSPACES;
  netrunnerClients = NETRUNNER_CLIENTS;
  netrunnerProgramProviders = NETRUNNER_PROGRAM_PROVIDERS;
  netrunnerEnemies = NETRUNNER_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.netrunnerLifepath = this.fb.group({
      netrunnerType: ['', Validators.required],
      hasPartner: [null, Validators.required],
      netrunnerPartner: '',
      netrunnerWorkspace: ['', Validators.required],
      netrunnerClient: ['', Validators.required],
      netrunnerProgramProvider: ['', Validators.required],
      netrunnerEnemy: ['', Validators.required],
    });

    this.netrunnerLifepath.valueChanges.subscribe(() => {
      this.netrunnerChange.emit(this.netrunnerLifepath);
    });

    this.netrunnerLifepath.get('hasPartner').valueChanges.subscribe((val) => {
      if (val === 'true') {
        this.netrunnerLifepath
          .get('netrunnerPartner')
          .setValidators([Validators.required]);
        this.netrunnerLifepath.get('netrunnerPartner').updateValueAndValidity();
      } else {
        this.netrunnerLifepath.get('netrunnerPartner').clearValidators();
        this.netrunnerLifepath.get('netrunnerPartner').updateValueAndValidity();
      }
    });
  }

  hasPartner(): boolean {
    return this.netrunnerLifepath.get('hasPartner').value === 'true';
  }
}
