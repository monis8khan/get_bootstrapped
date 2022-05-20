import { Component, ElementRef, OnInit, Renderer2, } from '@angular/core';
import { Services } from 'src/app/interfaces/services';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  previousElem: any;
  data!: Services;
  constructor(private ser: ServicesService, public renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.data = this.ser.getService(0);
    this.previousElem= document.getElementById('webdev');
  }

  serviceClick(event: any, id: number) {  //-- select element from the event target
    if (!(this.previousElem === event.target)) {
      this.toggleclass(event.target, false)
      this.previousElem && this.toggleclass(this.previousElem, true)
      this.previousElem = event.target;
      this.data = this.ser.getService(id) //-- filter out servicesList data according to service Id from the services service.
    }
  }

  toggleclass(elem: any, hasClass: boolean) { //-- toggle the classes
    if (hasClass) {
      this.renderer.removeClass(elem, 'active');
      this.renderer.removeClass(elem, 'bg-dark');
    } else {
      this.renderer.addClass(elem, 'active');
      this.renderer.addClass(elem, 'bg-dark');
    }
  }
}