/* eslint-disable @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RockerboyLifepathComponent } from './rockerboy-lifepath.component';

describe('RockerboyLifepathComponent', () => {
  let component: RockerboyLifepathComponent;
  let fixture: ComponentFixture<RockerboyLifepathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockerboyLifepathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockerboyLifepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
