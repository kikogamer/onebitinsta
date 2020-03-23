import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router'
 
@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {

  constructor(private auth: AuthService, private router: Router) { }

  onLogin(form: NgForm){
    this.auth.login(form.value.email, form.value.password);
  }

  goToSignUpPage() {
    this.router.navigateByUrl("Sign-Up");
  }
}
