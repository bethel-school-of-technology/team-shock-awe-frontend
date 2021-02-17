import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reprise';


getToken(){
  return localStorage.getItem('kbtoken');
}
adminlogout(){
  localStorage.clear();
}
}