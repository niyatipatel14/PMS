import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  register: any;
  f: any;
  constructor(private formBuilder: FormBuilder, private userservice: UserService, private route: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        contactNumber: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.required]
      },
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  signUp() {
    const userData = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      contactNumber: this.registerForm.value.contactNumber,
      password: this.registerForm.value.password
    }
    this.userservice.signUp(userData).subscribe((data)=>{
      console.log(data,"user dataa")
    })
    if (this.registerForm.valid) {
      this.userservice.signUp(userData).subscribe((data) => {
        if (data && data.status == "Success") {
          this.route.navigate(['login'])
        }
      })
    }
  }
}

