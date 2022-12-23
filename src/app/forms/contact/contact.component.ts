import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  contactForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  })

 constructor(private fb: FormBuilder){}

 get fullname() {
  return this.contactForm.get('fullName');
 }

 saveContact(form: any) {
  console.log(this.contactForm.value);
 }
}
