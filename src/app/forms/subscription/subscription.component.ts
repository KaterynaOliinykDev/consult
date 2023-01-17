import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';


@Component({
  selector: 'block-stay-update',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit{
  subscriptionForm: FormGroup;
  submitted = false;
  message = false;

  constructor(
    public formBuilder: FormBuilder,
    private emailService: EmailService
  ){}

  ngOnInit() {
    this.subscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get subscriptionFormControl() {
    return this.subscriptionForm.controls;
  }

  sendEmail():void{
    this.submitted = true;

    const mailOptions = {
      from: 'kateryna.oliinyk.dev@gmail.com',
      to: this.subscriptionFormControl.email.value,
      subject: 'Consult',
      html: '<div style = "text-align: center"><h1>Welcome to <span style = "color: #F3525A">CONSULT</span></h1><p style = "font-size: 18px">Thanks for subscribing to our newsletter.</p></div>'
    };

    this.emailService.sendEmail(mailOptions).subscribe((res) =>{
      if(res){
        this.message = true;
        this.subscriptionForm.reset();
      }
    })
  }
}
