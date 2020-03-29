import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import {  MatRippleModule } from '@angular/material/core';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatTooltipModule } from '@angular/material/tooltip';
import {  MatSelectModule} from '@angular/material/select';
import {  MatExpansionModule} from '@angular/material/expansion';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatListModule } from '@angular/material/list';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatGridListModule } from '@angular/material/grid-list';
import {  MatCardModule} from '@angular/material/card';
import {  MatChipsModule } from '@angular/material/chips';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    JavascriptComponent
  ]
})
export class LayoutModule {}
