import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {}
