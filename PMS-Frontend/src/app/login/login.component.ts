import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../register/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  f: any;
  formGroup: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null>; }> | undefined;
  constructor(private formBuilder: FormBuilder, private userservice: UserService, private route: Router) { }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: ['', Validators.required],
        acceptTerms: [false, Validators.required],
        this: <any>this.initForm(),
      },
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  login() {
    const userData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(userData,"data")
    this.userservice.login(userData).subscribe((data) => {
      console.log("userdata", data)
      if (data && data.status == "Success") {
        this.route.navigate(['dashboard'])
      }
    })
  }
}
