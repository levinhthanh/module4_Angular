import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput:string = "";
  passwordInput:string = "";

  accounts = [
    {
      userName: 'thanhle',
      password: 'thanh123'
    },
    {
      userName: 'nhinguyen',
      password: 'nhi123'
    },
  ];

  checkLogin(value){
     console.log(value);
  }


}
