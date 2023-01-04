import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm: FormGroup;
  Contacts:any = [];
  post_id: any;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private contactService: ContactService,
    public router: Router,
  ){
    this.contactForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  ngOnInit(): void {}


  saveContact() {
    this.contactService.createContact(this.contactForm.value).subscribe((res) => {
      this.isSubmitted = true;
      this.contactForm.reset();
    });
  }
}
