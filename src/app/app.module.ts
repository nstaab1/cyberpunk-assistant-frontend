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
import { LifeGoalsComponent } from './playable-character-creation-wizard/life-goals/life-goals.component';
import { RockerboyLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/rockerboy-lifepath/rockerboy-lifepath.component';
import { SoloLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/solo-lifepath/solo-lifepath.component';
import { DemographicsComponent } from './playable-character-creation-wizard/demographics/demographics.component';
import { LifepathComponent } from './playable-character-creation-wizard/lifepath/lifepath.component';
import { FriendsComponent } from './playable-character-creation-wizard/friends/friends.component';
import { EnemiesComponent } from './playable-character-creation-wizard/enemies/enemies.component';
import { LoveAffairsComponent } from './playable-character-creation-wizard/love-affairs/love-affairs.component';
import { NetrunnerLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/netrunner-lifepath/netrunner-lifepath.component';
import { TechLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/tech-lifepath/tech-lifepath.component';
import { MedtechLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/medtech-lifepath/medtech-lifepath.component';
import { MediaLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/media-lifepath/media-lifepath.component';
import { ExecLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/exec-lifepath/exec-lifepath.component';
import { LawmanLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/lawman-lifepath/lawman-lifepath.component';
import { FixerLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/fixer-lifepath/fixer-lifepath.component';
import { NomadLifepathComponent } from './playable-character-creation-wizard/role-lifepaths/nomad-lifepath/nomad-lifepath.component';
import { PlayerStatisticsComponent } from './playable-character-creation-wizard/player-statistics/player-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    GoonGenerationComponent,
    PlayableCharacterCreationWizardComponent,
    LifeGoalsComponent,
    RockerboyLifepathComponent,
    SoloLifepathComponent,
    DemographicsComponent,
    LifepathComponent,
    FriendsComponent,
    EnemiesComponent,
    LoveAffairsComponent,
    NetrunnerLifepathComponent,
    TechLifepathComponent,
    MedtechLifepathComponent,
    MediaLifepathComponent,
    ExecLifepathComponent,
    LawmanLifepathComponent,
    FixerLifepathComponent,
    NomadLifepathComponent,
    PlayerStatisticsComponent,
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
