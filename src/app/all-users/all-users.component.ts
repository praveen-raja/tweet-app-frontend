import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;
  ngOnInit() {

    let resp = this.http.get("http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/allUsers")
    resp.subscribe((result) => this.users = result);
  }

  // allUsers(data: any) {
  //   console.warn(data)

  //   let resp = this.http.get("http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/allUsers")
  //   resp.subscribe((result) => this.users = result);

  // }
}
