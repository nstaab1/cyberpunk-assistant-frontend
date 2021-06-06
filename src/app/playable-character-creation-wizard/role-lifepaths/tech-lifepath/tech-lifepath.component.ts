/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  TECH_ENEMIES,
  TECH_MAIN_CLIENTS,
  TECH_PARTNERS,
  TECH_SUPPLIERS,
  TECH_TYPES,
  TECH_WORKSPACES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-tech-lifepath',
  templateUrl: './tech-lifepath.component.html',
  styleUrls: ['./tech-lifepath.component.css'],
})
export class TechLifepathComponent implements OnInit {
  @Output() techChange = new EventEmitter<FormGroup>();
  techLifepath: FormGroup;

  techTypes = TECH_TYPES;
  techPartners = TECH_PARTNERS;
  techWorkspaces = TECH_WORKSPACES;
  techClients = TECH_MAIN_CLIENTS;
  techSuppliers = TECH_SUPPLIERS;
  techEnemies = TECH_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.techLifepath = this.fb.group({
      techType: ['', Validators.required],
      hasPartner: [null, Validators.required],
      techPartner: '',
      techWorkspace: ['', Validators.required],
      techClient: ['', Validators.required],
      techSupplier: ['', Validators.required],
      techEnemy: ['', Validators.required],
    });

    this.techLifepath.valueChanges.subscribe(() => {
      this.techChange.emit(this.techLifepath);
    });

    this.techLifepath.get('hasPartner').valueChanges.subscribe((val) => {
      if (val === 'true') {
        this.techLifepath
          .get('techPartner')
          .setValidators([Validators.required]);
        this.techLifepath.get('techPartner').updateValueAndValidity();
      } else {
        this.techLifepath.get('techPartner').clearValidators();
        this.techLifepath.get('techPartner').updateValueAndValidity();
      }
    });
  }

  hasPartner(): boolean {
    return this.techLifepath.get('hasPartner').value === 'true';
  }
}
