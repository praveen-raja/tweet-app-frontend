import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostTweetService } from '../service/post-tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {

  constructor(private route: Router, private postTweetService : PostTweetService) { }
 

  ngOnInit(): void {
  }
  postNow(data:any){
    console.warn(data)
    this.postTweetService.doPost(data).subscribe(
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



