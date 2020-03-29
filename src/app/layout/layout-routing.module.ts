import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { BootstrapfourComponent } from './bootstrapfour/bootstrapfour.component';
import { CssthreeComponent } from './cssthree/cssthree.component';
import { ExpressComponent } from './express/express.component';
import { HtmlfiveComponent } from './htmlfive/htmlfive.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const LayoutRoutes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'bootstrapfour', component: BootstrapfourComponent },
  { path: 'cssthree', component: CssthreeComponent },
  { path: 'express', component: ExpressComponent },
  { path: 'htmlfive', component: HtmlfiveComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'jquery', component: JavascriptComponent },
  { path: 'mongodb', component: MongodbComponent },
  { path: 'nodejs', component: NodejsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(LayoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
