import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

      numbers : string = '10,145,267';
      constructor(private _router : Router){}

  ngOnInit() {
  }

}
