/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NetrunnerLifepathComponent } from './netrunner-lifepath.component';

describe('NetrunnerLifepathComponent', () => {
  let component: NetrunnerLifepathComponent;
  let fixture: ComponentFixture<NetrunnerLifepathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetrunnerLifepathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetrunnerLifepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
