/* eslint-disable @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoloLifepathComponent } from './solo-lifepath.component';

describe('SoloLifepathComponent', () => {
  let component: SoloLifepathComponent;
  let fixture: ComponentFixture<SoloLifepathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloLifepathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloLifepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
