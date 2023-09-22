import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Feira-Nacional-Angular';


  @ViewChild('initialText', {static : true})
  initialText!: ElementRef<HTMLElement>

  saibaMais(){
    if(this.initialText){
      this.initialText.nativeElement.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
