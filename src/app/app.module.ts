import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service'; // import from data service to here

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // add animation 
import { FormsModule } from '@angular/forms'; // add this for two way data binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService], // add new service here
  bootstrap: [AppComponent]
})
export class AppModule { }
