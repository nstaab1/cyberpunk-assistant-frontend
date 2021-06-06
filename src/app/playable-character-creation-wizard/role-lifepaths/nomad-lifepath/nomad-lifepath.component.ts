import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NOMAD_AIR_TYPES,
  NOMAD_ENEMIES,
  NOMAD_LAND_TYPES,
  NOMAD_PACK_PHILOSOPHIES,
  NOMAD_PACK_ROLES,
  NOMAD_PACK_SIZES,
  NOMAD_SEA_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-nomad-lifepath',
  templateUrl: './nomad-lifepath.component.html',
  styleUrls: ['./nomad-lifepath.component.scss'],
})
export class NomadLifepathComponent implements OnInit {
  @Output() nomadChange = new EventEmitter<FormGroup>();
  nomadLifepath: FormGroup;

  packSizes = NOMAD_PACK_SIZES;
  packOperations: string[];
  nomadPackRoles = NOMAD_PACK_ROLES;
  nomadPackPhilosophies = NOMAD_PACK_PHILOSOPHIES;
  nomadEnemiesList = NOMAD_ENEMIES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.nomadLifepath = this.fb.group({
      packSize: ['', Validators.required],
      packType: ['', Validators.required],
      packOperation: ['', Validators.required],
      nomadPackRole: ['', Validators.required],
      nomadPackPhilosophy: ['', Validators.required],
      nomadEnemies: ['', Validators.required],
    });

    this.nomadLifepath.valueChanges.subscribe(() => {
      this.nomadChange.emit(this.nomadLifepath);
    });

    this.nomadLifepath.get('packType').valueChanges.subscribe((val) => {
      if (val === 'Land') {
        this.packOperations = NOMAD_LAND_TYPES;
      } else if (val === 'Air') {
        this.packOperations = NOMAD_AIR_TYPES;
      } else if (val === 'Sea') {
        this.packOperations = NOMAD_SEA_TYPES;
      } else {
        this.packOperations = [];
      }
    });
  }
}
