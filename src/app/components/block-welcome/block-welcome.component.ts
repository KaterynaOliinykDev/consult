import { Component } from '@angular/core';
import { faUserTie, faChartLine, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'block-welcome',
  templateUrl: './block-welcome.component.html',
  styleUrls: ['./block-welcome.component.css']
})
export class BlockWelcomeComponent {
  faUserTie = faUserTie;
  faChartLine = faChartLine;
  faBalanceScale = faBalanceScale;
}
