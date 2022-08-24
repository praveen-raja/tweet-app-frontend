import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(data: any)
  {
    return this.http.get(`http://localhost:8000/login/${data.username}/${data.password}`); 
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('user')
    if (!(user===null))
    {
      return true;
    }
    else{
      return false;
    }
  }
}
