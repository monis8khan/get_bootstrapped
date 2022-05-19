import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("about") about?: ElementRef; 
  title = 'get_bootstrapped';
  constructor(public element: ElementRef){

  }
  scroll(name: string) {
    var div = this.element.nativeElement.querySelector(name);
    div.scrollIntoView({ behavior: 'smooth' });
  }
}
