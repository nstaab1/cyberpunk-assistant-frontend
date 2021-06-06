import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableCharacterCreationWizardComponent } from './playable-character-creation-wizard.component';

describe('PlayableCharacterCreationWizardComponent', () => {
  let component: PlayableCharacterCreationWizardComponent;
  let fixture: ComponentFixture<PlayableCharacterCreationWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayableCharacterCreationWizardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayableCharacterCreationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
