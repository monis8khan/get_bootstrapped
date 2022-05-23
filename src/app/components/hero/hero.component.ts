import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1)'
      })),

      transition('small <=> large', animate('1000ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])))
    ]),
  ]
})
export class HeroComponent implements OnInit {

  state: string = "small";
  constructor() { }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small')
  }

  ngOnInit(): void {
  }

}
