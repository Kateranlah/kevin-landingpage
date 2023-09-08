import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProgressService }from '../progress.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent{

  
constructor(private ProgressService: ProgressService){ }
@ViewChild('myCharacter') character!: ElementRef;

   speak(){
    this.speakAnimation(); 
    this.printText();
    this.increseProgress()
    console.log(this.getProgress() );
    
  }
  
  printText(){
      document.getElementById("bubble").innerHTML = this.text[this. getProgress()] + `<button>continue</button`
    
  }
  
  speakAnimation() {
      this.startAnimation();
      setTimeout(() => {
        this.stopAnimation();
      }, 5000);
  }
  
  startAnimation() {
    this.character.nativeElement.classList.add("animate");
  }
  
   stopAnimation() {
    this.character.nativeElement.classList.remove("animate");
  }

  increseProgress() {
    this.ProgressService.increseProgress();
  }

  getProgress(){
    return this.ProgressService.progressNumber
  }
  
  
  

  text = [
    `Oi. Something happened here. <br>
    No, no, no <br>
    The opposite is the case. Nothing happend here. Where did all the Design go? <br>
    let me Fix it. Im a Webdeveloper anyhow.>`,
    
    `Okay, let us start with putting the navigation on the Top. <br> This works well these days.`
]
  
}

