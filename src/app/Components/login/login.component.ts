import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:String = "kofi";
confirm:String = "submit";


  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(){
    this.name = "kofi";
    if(this.name == "kofi"){
      this.confirm = "succesful"
    }
  }

}
