import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Monis8khan';
  constructor(public element: ElementRef) {

  }
  scroll(name: string) {
    var div = this.element.nativeElement.querySelector(name);
    div.scrollIntoView({ behavior: 'smooth' });
  }
}
