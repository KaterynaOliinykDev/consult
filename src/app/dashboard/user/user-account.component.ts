import { Component } from '@angular/core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  title = 'consult';
  faSmile = faSmile;
  selectedState: boolean = true;
  avatar=false;
  username = 'test';

  logout(){
    if(localStorage.getItem('role')){
      localStorage.removeItem('role');
      window.location.reload();
    }
  }
}
