import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: string;
  constructor(private route: Router, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
  }


  loginNow(data: any) {
    this.user = data.username
    console.warn(data)
    this.loginService.login(data).subscribe(
      (result) => {
        console.warn(result)
        this.route.navigate(['postTweet'])
        alert("Successfully LoggedIn")
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    )
  }
  // loginNow(data:any){

  //   this.user= data.username
  //   console.warn(data)
  //   this.loginService.login(data).subscribe((result: any) => {console.warn(result)})
  //   this.route.navigate(['postTweet'])
  // }

  setSession() {
    sessionStorage.setItem('user', "praveen")
  }


}
