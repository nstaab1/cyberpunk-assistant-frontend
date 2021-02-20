import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoonGenerationComponent } from './goon-generation/goon-generation.component';
import { MaterialModule } from './material.module';
import { RandomizerService } from './randomizer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayableCharacterCreationWizardComponent } from './playable-character-creation-wizard/playable-character-creation-wizard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleLifepathsComponent } from './playable-character-creation-wizard/role-lifepaths/role-lifepaths.component';
import { LifeGoalsComponent } from './playable-character-creation-wizard/life-goals/life-goals.component';
import { RockerboyLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/rockerboy-lifepath/rockerboy-lifepath.component';
import { SoloLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/solo-lifepath/solo-lifepath.component';
import { DemographicsComponent } from './playable-character-creation-wizard/demographics/demographics.component';

@NgModule({
  declarations: [
    AppComponent,
    GoonGenerationComponent,
    PlayableCharacterCreationWizardComponent,
    LifeGoalsComponent,
    RoleLifepathsComponent,
    RockerboyLifepathComponent,
    SoloLifepathComponent,
    DemographicsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [RandomizerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
