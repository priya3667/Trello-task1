import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbcdService {
  
  public subject = new BehaviorSubject<number>(0);

  constructor() { }

increment1() {
  this.subject.next(this.subject.value + 1);
}

decrement1() {
if(this.subject.value>0){
  this.subject.next(this.subject.value - 1);
}
}

}
