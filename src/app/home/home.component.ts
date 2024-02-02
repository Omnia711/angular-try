import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 userName:string="Omnia";
 onsale:boolean=true;
 price:number=3000;
 imgpath:string="../../assets/2.gif"
 searchTerm:string=""
}
