import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesibilityComponent } from './components/accesibility/accesibility.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu'
import { ResponsiveNavBarComponent } from './components/responsive-nav-bar/responsive-nav-bar.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent, LandingComponent, NavBarComponent, AccesibilityComponent, FooterComponent, ResponsiveNavBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
