import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tweet',
  templateUrl: './all-tweet.component.html',
  styleUrls: ['./all-tweet.component.css']
})
export class AllTweetComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  tweets: any;
  ngOnInit() {

    let resp = this.http.get("http://localhost:8000/allTweet")
    resp.subscribe((result) => this.tweets = result);
  }

}
