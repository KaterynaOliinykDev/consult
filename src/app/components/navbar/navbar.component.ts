import { Component } from '@angular/core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'consult';
  faSmile = faSmile;
}
