import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainDashboardComponent } from './pages/main/main.component';
import { UsersComponent } from './pages/users/users.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path:'dashboard/admin/main',
    component: MainDashboardComponent,
    data: {
      title: 'Main',
      breadcrumb:'Main'
    }
  },
  {
    path:'dashboard/admin/users',
    component: UsersComponent,
    data: {
      title: 'Users',
      breadcrumb:'Users'
    }
  },
  {
    path:'dashboard/admin/contacts',
    component: ContactsComponent,
    data: {
      title: 'Contacts',
      breadcrumb: 'Contacts'
    }
  },
  {
    path:'dashboard/admin/subscriptions',
    component: SubscriptionsComponent,
    data: {
      title: 'Subscriptions',
      breadcrumb: 'Subcriptions'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
