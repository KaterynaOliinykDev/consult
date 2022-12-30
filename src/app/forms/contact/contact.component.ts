import { Component, OnInit } from '@angular/core';
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

  constructor(
    public formBuilder: FormBuilder,
    private contactService: ContactService,
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
    this.contactService.createContact(this.contactForm.value).subscribe((response: any) => {
      console.log('Contact create.');
    });
}
}
