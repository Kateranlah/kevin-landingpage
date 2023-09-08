import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  public progressNumber: number = 0;
  public refresh = new Subject<number>();
  constructor() {  }

  increseProgress() {
    this.progressNumber ++ 
    this.refresh.next(this.progressNumber);
  }

  getProgress() {
    return this.progressNumber;
  }

  getProgressObservable(){
    return this.refresh.asObservable();
  }
 
}
