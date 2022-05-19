import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();
  constructor() { }

  menuClick(el: string){
    this.scrollTo.emit(el)
  }

  ngOnInit(): void {
  }

}
