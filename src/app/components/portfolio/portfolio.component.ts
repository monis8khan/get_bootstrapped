import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolios'
import { PortfolioService } from '../../services/portfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioHistory!: Portfolio[];
  constructor(private port:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioHistory = this.port.getPortfolioHistory();
  }

}
