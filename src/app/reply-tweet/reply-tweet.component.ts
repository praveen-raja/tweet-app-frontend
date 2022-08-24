import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply-tweet',
  templateUrl: './reply-tweet.component.html',
  styleUrls: ['./reply-tweet.component.css']
})
export class ReplyTweetComponent implements OnInit {

  id: number;
  constructor( private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  

  replyTweetNow(data: any) {
    console.warn(data)
    return this.http.post(`http://localhost:8000/reply/${data.id}`,data).subscribe(
      (result) => {
        console.warn(result)
        alert("Successfully Updated")
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    );

  }

}
