import { Component, Input, OnInit, Output } from '@angular/core';
import { AbcdService } from '../abcd.service';

enum BackgroundColor {
  Yellow = 'yellow',
  Blue = 'blue'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  constructor(private abcdService:AbcdService) {
  }

  count!:number;
  bgColor!:string

  ngOnInit() {
    this.abcdService.subject.subscribe((c) => {
      this.count = c;
      this.bgColor=this.count%2===0?BackgroundColor.Yellow:BackgroundColor.Blue;
    })
  }
}

