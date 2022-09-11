import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  public doRegistration(data: any)
  {
    return this.http.post("http://tweetapp-backend-lb-949834613.us-east-1.elb.amazonaws.com/register",data); 
  }
}
