import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

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
import { MatSidenavModule } from '@angular/material/sidenav';
import { JavascriptComponent } from './javascript/javascript.component';
import { HtmlfiveComponent } from './htmlfive/htmlfive.component';
import { CssthreeComponent } from './cssthree/cssthree.component';
import { JqueryComponent } from './jquery/jquery.component';
import { BootstrapfourComponent } from './bootstrapfour/bootstrapfour.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { ExpressComponent } from './express/express.component';
import { MyGenderPipePipe } from './my-gender-pipe.pipe';

@NgModule({
  declarations: [
    JavascriptComponent,
    HtmlfiveComponent,
    CssthreeComponent,
    JqueryComponent,
    BootstrapfourComponent,
    AngularComponent,
    NodejsComponent,
    MongodbComponent,
    ExpressComponent,
    MyGenderPipePipe
  ],
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
    MatIconModule,
    MatSidenavModule,
    LayoutRoutingModule
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
    MatSidenavModule,
    JavascriptComponent,
    MyGenderPipePipe
  ]
})
export class LayoutModule {}
