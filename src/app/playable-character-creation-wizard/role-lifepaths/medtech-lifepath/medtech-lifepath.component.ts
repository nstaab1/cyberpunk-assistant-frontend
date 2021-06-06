import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MEDTECH_CLIENTS,
  MEDTECH_PARTNERS,
  MEDTECH_SUPPLIERS,
  MEDTECH_TYPES,
  MEDTECH_WORKSPACES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-medtech-lifepath',
  templateUrl: './medtech-lifepath.component.html',
  styleUrls: ['./medtech-lifepath.component.scss'],
})
export class MedtechLifepathComponent implements OnInit {
  @Output() medtechChange = new EventEmitter<FormGroup>();
  medtechLifepath: FormGroup;

  medtechTypes = MEDTECH_TYPES;
  medtechPartners = MEDTECH_PARTNERS;
  medtechWorkspaces = MEDTECH_WORKSPACES;
  medtechClients = MEDTECH_CLIENTS;
  medtechSuppliers = MEDTECH_SUPPLIERS;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medtechLifepath = this.fb.group({
      medtechType: ['', Validators.required],
      hasPartner: [false, Validators.required],
      medtechPartner: ['', Validators.required],
      medtechWorkspace: ['', Validators.required],
      medtechClient: ['', Validators.required],
      medtechSupplier: ['', Validators.required],
    });

    this.medtechLifepath.valueChanges.subscribe(() => {
      this.medtechChange.emit(this.medtechLifepath);
    });

    this.medtechLifepath.get('hasPartner').valueChanges.subscribe((val) => {
      if (val === 'true') {
        this.medtechLifepath
          .get('medtechPartner')
          .setValidators([Validators.required]);
        this.medtechLifepath.get('medtechPartner').updateValueAndValidity();
      } else {
        this.medtechLifepath.get('medtechPartner').clearValidators();
        this.medtechLifepath.get('medtechPartner').updateValueAndValidity();
      }
    });
  }

  hasPartner(): boolean {
    return this.medtechLifepath.get('hasPartner').value === 'true';
  }
}
