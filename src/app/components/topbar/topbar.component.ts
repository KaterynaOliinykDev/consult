import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthenticationComponent } from '../../forms/authentication/authentication.component';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AuthenticationComponent);
  }

}
