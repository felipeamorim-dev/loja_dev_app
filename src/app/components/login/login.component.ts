import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private toast: ToastrService, private auth: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  logar() {
    const cred: Credential = this.formLogin.getRawValue();
    this.auth.login(cred).subscribe({
      next: response => {
        const token = response.headers.get("authorization").substring(7);
        this.auth.loginComSucesso(token);
        this.toast.success('Login realizado com sucesso!');
      }
    })
  }

}
