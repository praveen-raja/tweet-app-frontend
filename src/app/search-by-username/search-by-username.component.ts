import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-username',
  templateUrl: './search-by-username.component.html',
  styleUrls: ['./search-by-username.component.css']
})
export class SearchByUsernameComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  username: string;

  user : any;

  ngOnInit(): void {
  }

//   searchUserNow(data: any) {
//     console.warn(data)
//     return this.http.get(`http://localhost:8000/searchByUsername/${data.username}`).subscribe((result: any) => {
//      this.user = result
//      console.warn(result)
//    });
// }

searchUserNow(data: any) {
  console.warn(data)
  return this.http.get(`http://localhost:8000/searchByUsername/${data.username}`).subscribe(
    (result) => {
      console.warn(result)
      this.user = result
      alert("Please scroll below for "+data.username+" details!")
      
    },
    (error) => {
      console.error('error caught in component')
      alert("invalid input");
    }
  );
}
}
