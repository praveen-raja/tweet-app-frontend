import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userDisplayName:any = sessionStorage.getItem('user');

  constructor(private http: HttpClient) { }
  public login(data: any)
  {
    return this.http.get(`http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/login/${data.username}/${data.password}`); 
  }

  public getUsername()
  {
     var user = JSON.stringify(sessionStorage.getItem('user'))
     return user
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
