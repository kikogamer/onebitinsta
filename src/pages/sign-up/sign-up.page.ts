import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  constructor(private auth: AuthService, private location: Location) { }
  
  onSignUp(form: NgForm) {
    this.auth.signUp(form.value);
  }

  backToLoginPage(){
    this.location.back();
  }

}
