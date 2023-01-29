import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent{
  title = 'consult';
  faSmile = faSmile;
  selectedState: boolean = true;

  constructor( public router: Router){}

  logout(){
    if(localStorage.getItem('role')){
      localStorage.removeItem('role');
      window.location.reload();
    }
  }
}

