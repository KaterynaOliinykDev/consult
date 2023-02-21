import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  avatar = false;

  constructor(
    public formBuilder: FormBuilder,
  ){}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      avatar:[''],
      username: [''],
      fullName: [''],
      email:[''],
      phone:['']
    });

    if(localStorage.getItem('username')){
      this.profileForm.patchValue({username: localStorage.getItem('id')})
    }
    if(localStorage.getItem('email')){
      this.profileForm.patchValue({email: localStorage.getItem('id')})
    }
  }

  saveProfile(){

  }

}
