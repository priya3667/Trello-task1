import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task-1';
  newFields : any[]= [];
  newTask !: string;
  task1Form!: FormGroup;
  

  addItem() {
    if(this.newTask){
      this.newFields.push(this.newTask);
    this.newTask='';
    console.log("newFields:", this.newFields);
    }
  }

  ngOnInit(): void {
    this.task1Form = new FormGroup({
      newtask : new FormControl()
    })
    
  }
  
  onDelete(index: number){
    this.newFields.splice(index,1);
  }
  
  darkModeOn(newFields:any[]){
    this.newFields= this.newFields
  }
}
