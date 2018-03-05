import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  redirectAfterLogin = ['/admin/dashboard'];
  constructor(
    private router: Router,
    private sharedService: SharedService,
     private formBilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.sharedService.AdminLTE.init()
    this.loginForm = this.formBilder.group({
      email: this.formBilder.control('', [Validators.required, Validators.minLength(5), Validators.pattern(this.sharedService.email)]),
      password: this.formBilder.control('', [Validators.required, Validators.minLength(5)]),
    })
  }

  login(data){
    this.authService.login(data)
    .subscribe((response) => {      
      this.authService.check = true
      this.authService.jwtToken.token = response.result.token
      this.authService.localStorage.setObject(this.authService.USER_KEY,response.result.user)
      this.router.navigate(this.redirectAfterLogin)
    })
  }


}
