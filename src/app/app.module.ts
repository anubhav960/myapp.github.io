import { NgModule }      from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AboutComponent } from './components/about.component';
import {routing} from './app.routing';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,routing ],
  providers: [],
  declarations: [ AppComponent,UserComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);