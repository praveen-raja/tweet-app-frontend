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

    let resp = this.http.get("http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/allTweet")
    resp.subscribe((result) => this.tweets = result);
  }

}
