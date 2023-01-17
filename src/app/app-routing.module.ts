import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '',
    data: {
    title: 'Home',
    breadcrumb:'Home'
  },
  redirectTo: '/home',
  pathMatch: 'full'},
  {
    path:'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumb:'Home'
    }
   },
  {
    path:'about',
    component: AboutComponent,
    data: {
      title: 'About Us',
      breadcrumb: 'About'
    }
  },
  {
    path:'service',
    component: ServiceComponent,
    data: {
      title: 'Services',
      breadcrumb: 'Services'
    }
  },
  {
    path:'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Us',
      breadcrumb: 'Contact'
    }
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
