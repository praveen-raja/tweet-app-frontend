import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tweet',
  templateUrl: './update-tweet.component.html',
  styleUrls: ['./update-tweet.component.css']
})
export class UpdateTweetComponent implements OnInit {
 
  username: string;
  id: number;
  constructor( private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  updateTweetNow(data: any) {
    console.warn(data)
    return this.http.put(`http://localhost:8000/updateTweet/${data.id}/${data.username}`,data).subscribe(
      (result) => {
        console.warn(result)
        alert("Successfully Added!!")
        this.route.navigate(['searchTweetByUsername'])
        
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    );

  }

}
