import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(userlogin: NgForm){
    let username=userlogin.value;
   // alert(username.uname)
   this.router.navigate(['/index']);
    
  }
}
