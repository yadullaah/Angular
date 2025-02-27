import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './shared/directives/custom.directive';
import { HoverChangeDirective } from './shared/directives/hover-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    HoverChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
