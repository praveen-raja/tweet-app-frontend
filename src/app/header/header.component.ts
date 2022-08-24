import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  loginStatus: boolean = false;
  logoutNow() {
    this.loginStatus = true
    let resp = this.http.get("http://localhost:8000/logout").subscribe((result) => {
      console.warn(result)
      this.loginStatus = false
    });
  }

  logout() {
    sessionStorage.removeItem('user')


  }

}
