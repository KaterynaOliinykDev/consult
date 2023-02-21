import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from "./confirm-password.validator";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  message = false;
  selectedIndex = 0;
  userName?:string;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private userService: UserService,
  ){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group(
    {
      username: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;
    const email = this.loginFormControl.email.value;
    const password = this.loginFormControl.password.value;

    if (this.loginForm.invalid) {
      return;
    };

    this.userService.getRegisteredUser(email, password).subscribe(data => {
      if(data.role && data.role == 'Admin'){
        localStorage.setItem('role', data.role);
        this.router.navigate(['/dashboard/admin']);
      } else
      if(data.role && data.role == 'User'){
        localStorage.setItem('role', data.role);
        localStorage.setItem('id', data.id);
        this.router.navigate(['/account/user']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  register(): void {
    this.submitted = true;
    const data = {
      username: this.registerFormControl.username.value,
      email: this.registerFormControl.email.value,
      password: this.registerFormControl.password.value,
      role:'User'
    }

    if (this.registerForm.invalid) {
      return
    }

    this.userService.createUser(data).subscribe((res) => {
      this.userName = res.username;
      this.selectedIndex = 0;
      this.message = true;
      this.registerForm.reset();
    });
  }
}
