import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
       


  message: any;
  constructor(private registerService: RegisterService ,private route:Router) { }

  ngOnInit(): void {
  }
  

  // registerNow(data:any){
  //   console.warn(data)
  //   this.registerService.doRegistration(data).subscribe((result) => {console.warn(result)})
  //    this.route.navigate(['login'])
  // }

  registerNow(data:any){
    console.warn(data)
    this.registerService.doRegistration(data).subscribe(
      (result) => {console.warn(result)
      alert("Successfully Registered")
      this.route.navigate(['login'])},
      (error) => {                             
        console.error('error caught in component')
        alert("invalid input");
      }
    )
}
}
