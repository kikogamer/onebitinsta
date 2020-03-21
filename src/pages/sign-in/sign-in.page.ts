import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {

  constructor(private auth: AuthService) { }

  onLogin(form: NgForm){
    this.auth.login(form.value.email, form.value.password);
  }
}
