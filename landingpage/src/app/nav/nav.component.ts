import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { ProgressService }from '../progress.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('dot1') dot1!: ElementRef;
 


  progressNumber:number
  constructor(private ProgressService: ProgressService){this.ProgressService.getProgressObservable().subscribe((progress) => {
    this.progressNumber = progress; 
  if (progress === 2) {
    } });
  }

 
  increseProgress() {
    this.ProgressService.increseProgress();
  }

  // getProgress(){
  //   return this.ProgressService.progressNumber
  // }
  
  

  // this.character.dots.nativeElement.classList.add("dot-delete");
}
