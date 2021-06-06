/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawmanLifepathComponent } from './lawman-lifepath.component';

describe('LawmanLifepathComponent', () => {
  let component: LawmanLifepathComponent;
  let fixture: ComponentFixture<LawmanLifepathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawmanLifepathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawmanLifepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
