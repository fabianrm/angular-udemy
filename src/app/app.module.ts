import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
