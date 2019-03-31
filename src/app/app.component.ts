import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'this value is coming from app.component.ts';
  months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = false;
  myClickFunction(event) { 
   alert("Button is clicked");
 }
 changemonths($event){
   alert("Month selected has been changed") ;
 }
}
