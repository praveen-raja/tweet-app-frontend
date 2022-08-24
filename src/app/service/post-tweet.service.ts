import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostTweetService {

  constructor(private http : HttpClient) { }

  public doPost(data: any)
  {
    return this.http.post("http://localhost:8000/addTweet",data); 
  }
}
