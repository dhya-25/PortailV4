import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,matricule:string,nom:string,prenom:string): Observable<any> {
    return this.http.post(AUTH_API + 'signuptt33', {
      username,
      email,
      password,
      matricule,
      nom,
      prenom

    }, httpOptions);
  }
  register2(user:any){
    return this.http.post(AUTH_API + 'signuptt33',user)

  }

  logout() {
    localStorage.clear();
  }


}
