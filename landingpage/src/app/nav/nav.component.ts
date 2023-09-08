import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { ProgressService }from '../progress.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;
  @ViewChild('dot3') dot3!: ElementRef;
  @ViewChild('ul') ul!: ElementRef;
  @ViewChild('li1') li1!: ElementRef;
  @ViewChild('li2') li2!: ElementRef;
  @ViewChild('li3') li3!: ElementRef;


  progressNumber:number
  constructor(private ProgressService: ProgressService){this.ProgressService.getProgressObservable().subscribe((progress) => {
    this.progressNumber = progress; 
  if (progress === 2) {
    this.deleteDots();
    } });
  
    
  
  }

  deleteDots(){
    this.dot1.nativeElement.classList.add("dot-delete");
    this.dot2.nativeElement.classList.add("dot-delete");
    this.dot3.nativeElement.classList.add("dot-delete");
    setTimeout(() => {
      this.raiseNav();
    }, 740);
  }

  raiseNav(){
    this.li1.nativeElement.classList.add("collapse-nav");
    this.li2.nativeElement.classList.add("collapse-nav");
    this.li3.nativeElement.classList.add("collapse-nav");
   
  }
 
  increseProgress() {
    this.ProgressService.increseProgress();
  }

  // getProgress(){
  //   return this.ProgressService.progressNumber
  // }
  
  

  // this.character.dots.nativeElement.classList.add("dot-delete");
}
