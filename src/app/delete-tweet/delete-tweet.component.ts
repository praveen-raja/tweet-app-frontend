import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-tweet',
  templateUrl: './delete-tweet.component.html',
  styleUrls: ['./delete-tweet.component.css']
})
export class DeleteTweetComponent implements OnInit {

  username: string;
  id: number;
  constructor( private route: Router, private http: HttpClient) { }

  ngOnInit(): void { 
  }

  deleteTweetNow(data: any) {
    console.warn(data)
    return this.http.delete(`http://localhost:8000/deleteTweet/${data.id}/${data.username}`).subscribe(
      (result) => {
        console.warn(result)
        alert("Successfully Updated")
        this.route.navigate(['postTweet'])
        
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    )
   };

  }


