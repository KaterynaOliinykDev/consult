import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';

import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BlockWelcomeComponent } from './components/block-welcome/block-welcome.component';
import { FooterComponent } from './components/footer/footer.component';

import { ContactComponent as ContactForm} from './forms/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';



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
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    FontAwesomeModule,
    MatFormFieldModule,
    GoogleMapsModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
