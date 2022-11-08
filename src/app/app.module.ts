import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesibilityComponent } from './components/accesibility/accesibility.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatTreeModule } from '@angular/material/tree'
import { MatPaginatorModule } from '@angular/material/paginator'
import { ResponsiveNavBarComponent } from './components/responsive-nav-bar/responsive-nav-bar.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxTweetModule } from "ngx-tweet";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, LandingComponent, NavBarComponent, AccesibilityComponent, FooterComponent, ResponsiveNavBarComponent
  ],
  imports: [
    CommonModule,
    NgxTweetModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTreeModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
