import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  form: any = {
    username: null,
    password: null,
    matricule:null,

    email:null,
    nom:null,
    prenom:null

  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorage,private route:Router) { }

  ngOnInit() {
  }

  add() {
    const { username, password,matricule,email,nom,prenom } = this.form;

    this.authService.register(username, password,matricule,email,nom,prenom).subscribe(
      data=>{this.route.navigate(['/login'])
      },

        erre=>{}
      )}



       // localStorage.setItem("us",username);








}
