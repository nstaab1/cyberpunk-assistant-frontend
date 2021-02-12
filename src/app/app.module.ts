import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoonGenerationComponent } from './goon-generation/goon-generation.component';
import { MaterialModule } from './material.module';
import { RandomizerService } from './randomizer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, GoonGenerationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, NgbModule],
  providers: [RandomizerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
