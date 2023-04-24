import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbcdService } from '../abcd.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class ComHeaderComponent implements OnInit{
  
  @Input() newFields : any[]= [];
  index!: number;
  @Output() delete : EventEmitter<number> = new EventEmitter<number>();

  @Input() count=0;

  constructor(private abcdService: AbcdService){}
   
 deleteItem(index: number) {
   this.newFields.splice(index, 1);
 }
 
 increment(){
  this.abcdService.increment1();
  }

  decrement(){
    this.abcdService.decrement1();
  }
 ngOnInit(): void {
      
}
}
