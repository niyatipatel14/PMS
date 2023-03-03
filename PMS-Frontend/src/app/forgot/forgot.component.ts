import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../register/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  email!: string;
  forgotForm!: FormGroup;
  submitted = false;
  f: any;
constructor(private formBuilder: FormBuilder, private userservice:UserService) { }
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        acceptTerms: [false, Validators.required]
      },
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.forgotForm.controls[controlName].hasError(errorName);
  }
  forgotPassword(){
    const userData={
      email:this.forgotForm.value.email,
    }
    this.userservice.login(userData).subscribe((data)=>{
      console.log(data,"user dataa")
    })
  }
}

