import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CULTURAL_REGIONS,
  LANGUAGES,
  ROLES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent implements OnInit {
  @Input() demographics: FormGroup;

  roles = ROLES;
  culturalRegions = CULTURAL_REGIONS;

  languages = LANGUAGES;
  languageOptions: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {
    this.languageOptions = this.demographics.get('language').valueChanges.pipe(
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
}
