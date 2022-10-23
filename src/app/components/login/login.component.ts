import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private toast: ToastrService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    const cred: Credential = this.formLogin.getRawValue();
    this.auth.login(cred).subscribe({
      next: response => {
        const token = response.headers.get("authorization").substring(7);
        this.auth.loginWithSuccess(token);
        this.toast.success('Login realizado com sucesso!');
        this.router.navigate(['home']);
      }
    })
  }

}
