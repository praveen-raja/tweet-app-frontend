import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-tweet',
  templateUrl: './like-tweet.component.html',
  styleUrls: ['./like-tweet.component.css']
})
export class LikeTweetComponent implements OnInit {

  id: number;
  option:number;
  constructor( private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  likeTweetNow(data: any) {
    console.warn(data)
    return this.http.put(`http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/like/${data.id}/${data.option}`,data).subscribe(
      (result) => {
        console.warn(result)
        alert("Feedback Submitted Successfully!!")
     
        
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    );

  }
}
