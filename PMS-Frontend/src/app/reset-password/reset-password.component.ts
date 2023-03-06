import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../register/user.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email!: string;
  resetPasswordForm!: FormGroup;
  submitted = false;
  f: any;
constructor(private formBuilder: FormBuilder, private userservice:UserService) { }
  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group(
      {
        password: ['', Validators.required],
        acceptTerms: [false, Validators.required]
      },
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.resetPasswordForm.controls[controlName].hasError(errorName);
  }
  resetPassword(){
    const userData={
      password: this.resetPasswordForm.value.password
    }
  }
}