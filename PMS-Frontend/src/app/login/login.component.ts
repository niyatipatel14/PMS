import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
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
constructor(private formBuilder: FormBuilder, private userservice:UserService,private route: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: ['', Validators.required],
        acceptTerms: [false, Validators.required]
      },
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  login(){
    const userData={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userservice.login(userData).subscribe((data)=>{
      console.log("userdata",data)
      if (data && data.status == "Success") {
        this.route.navigate(['dashboard'])
       
      }
      console.log(data,"user dataa")
    })
  }
}
