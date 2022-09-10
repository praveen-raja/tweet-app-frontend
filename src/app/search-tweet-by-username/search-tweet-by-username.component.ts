import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tweet-by-username',
  templateUrl: './search-tweet-by-username.component.html',
  styleUrls: ['./search-tweet-by-username.component.css']
})
export class SearchTweetByUsernameComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  username: string;

  user : any;

  ngOnInit(): void {
  }
  
  searchUserTweet(data: any) {
    console.warn(data)
    return this.http.get(`http://localhost:8000/getTweetOfUser/${data.username}`).subscribe(
      (result) => {
        console.warn(result)
        this.user =result
        alert("Please scroll below for "+data.username+" tweets!")
       
        
      },
      (error) => {
        console.error('error caught in component')
        alert("invalid input");
      }
    );
}
}
