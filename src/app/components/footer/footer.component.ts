import { Component } from '@angular/core';
import { faMap,faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faMap = faMap;
  faEnvelopeOpen = faEnvelopeOpen;
  faPhone = faPhone;
  faArrowRight = faArrowRight;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
}
