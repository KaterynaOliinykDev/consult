import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { ErrorStateMatcher } from '@angular/material/core';

import { GoogleMapsModule } from '@angular/google-maps';

//import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BlockWelcomeComponent } from './components/block-welcome/block-welcome.component';
import { FooterComponent } from './components/footer/footer.component';

import { ContactComponent as ContactForm} from './forms/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    NavbarComponent,
    TopbarComponent,
    ContactComponent,
    ContactForm,
    BlockWelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    //NgDynamicBreadcrumbModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    Title,
    { provide: ErrorStateMatcher, useClass:CustomErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
