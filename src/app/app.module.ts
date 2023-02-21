import { NgModule } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { GoogleMapsModule } from '@angular/google-maps';

import { BreadcrumbModule } from 'xng-breadcrumb';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardRoutingModule } from './dashboard/admin/admin-dashboard-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { BlockWelcomeComponent } from './components/block-welcome/block-welcome.component';
import { BlockOurTeamComponent } from './components/block-our-team/block-our-team.component';
import { FooterComponent } from './components/footer/footer.component';

import { ContactComponent as ContactForm} from './forms/contact/contact.component';
import { AuthenticationComponent } from './forms/authentication/authentication.component';
import { SubscriptionComponent } from './forms/subscription/subscription.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard.component';
import { MainDashboardComponent } from './dashboard/admin/pages/main/main.component';
import { UsersComponent } from './dashboard/admin/pages/users/users.component';
import { ContactsComponent } from './dashboard/admin/pages/contacts/contacts.component';
import { SubscriptionsComponent } from './dashboard/admin/pages/subscriptions/subscriptions.component';
import { UserAccountComponent } from './dashboard/user/user-account.component';
import { PersonalComponent } from './dashboard/user/pages/personal/personal.component';
import { UserSubscriptionsComponent } from './dashboard/user/pages/user-subscriptions/user-subscriptions.component';
import { PaymentsComponent } from './dashboard/user/pages/payments/payments.component';
import { ProfileComponent } from './forms/profile/profile.component';


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
    AuthenticationComponent,
    SubscriptionComponent,
    BlockWelcomeComponent,
    BlockOurTeamComponent,
    FooterComponent,
    AdminDashboardComponent,
    UsersComponent,
    ContactsComponent,
    SubscriptionsComponent,
    MainDashboardComponent,
    SliderComponent,
    UserAccountComponent,
    PersonalComponent,
    UserSubscriptionsComponent,
    PaymentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminDashboardRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    MaterialModule,
    BreadcrumbModule,
    NgbModule
  ],
  providers: [
    Title,
    { provide: ErrorStateMatcher, useClass:CustomErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
