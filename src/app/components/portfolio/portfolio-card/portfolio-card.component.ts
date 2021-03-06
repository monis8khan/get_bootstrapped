import { Component, OnInit, Input } from '@angular/core';
import {Portfolio} from '../../../interfaces/portfolios'

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() portfolioData!: Portfolio;
  hover: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onHover(val: boolean){
    this.hover = val;
  }
}
