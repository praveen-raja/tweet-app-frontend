import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

 
  username: string;
  password: string;
  constructor( private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  updatePasswordNow(data: any) {
    console.warn(data)
    return this.http.get(`http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/forgotPassword/${data.username}/${data.password}`).subscribe(
      (result) => {
        console.warn(result)
        alert("Successfully Updated")
        this.route.navigate(['login'])
        
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    );

  }

}
