/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnemiesComponent } from './enemies.component';

describe('EnemiesComponent', () => {
  let component: EnemiesComponent;
  let fixture: ComponentFixture<EnemiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
