import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  FIXER_ENEMIES,
  FIXER_OFFICES,
  FIXER_PARTNERS,
  FIXER_SIDE_CLIENTS,
  FIXER_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-fixer-lifepath',
  templateUrl: './fixer-lifepath.component.html',
  styleUrls: ['./fixer-lifepath.component.scss'],
})
export class FixerLifepathComponent implements OnInit {
  @Output() fixerChange = new EventEmitter<FormGroup>();
  fixerLifepath: FormGroup;

  fixerTypes = FIXER_TYPES;
  fixerPartners = FIXER_PARTNERS;
  fixerOffices = FIXER_OFFICES;
  fixerSideClientsList = FIXER_SIDE_CLIENTS;
  fixerEnemiesList = FIXER_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fixerLifepath = this.fb.group({
      fixerType: ['', Validators.required],
      hasPartner: [false, Validators.required],
      fixerPartner: ['', Validators.required],
      fixerOffice: ['', Validators.required],
      fixerSideClients: ['', Validators.required],
      fixerEnemies: ['', Validators.required],
    });

    this.fixerLifepath.valueChanges.subscribe(() => {
      this.fixerChange.emit(this.fixerLifepath);
    });

    this.fixerLifepath.get('hasPartner').valueChanges.subscribe((val) => {
      if (val === 'true') {
        this.fixerLifepath
          .get('fixerPartners')
          .setValidators([Validators.required]);
        this.fixerLifepath.get('fixerPartners').updateValueAndValidity();
      } else {
        this.fixerLifepath.get('fixerPartners').clearValidators();
        this.fixerLifepath.get('fixerPartners').updateValueAndValidity();
      }
    });
  }

  hasPartner(): boolean {
    return this.fixerLifepath.get('hasPartner').value === 'true';
  }
}
