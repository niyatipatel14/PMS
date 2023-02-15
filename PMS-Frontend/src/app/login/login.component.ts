import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
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
constructor(private formBuilder: FormBuilder, private userservice:UserService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: ['', Validators.required],
        acceptTerms: [false, Validators.required]
      },
    );
  }
  onSubmit(loginForm: any, second: any) {
    console.log("inside onsubmit", loginForm, second);
  }
  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  checkValidation(this: any, oninput: string) {
    const validation = this.loginForm.get(oninput).invalid && (this.loginForm.get(oninput).dirty || this.loginForm.get(oninput).touched)
    return validation;
  }
  login(){
    const userData={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userservice.login(userData).subscribe((data)=>{
      console.log(data,"user dataa")
    })
  }
}
