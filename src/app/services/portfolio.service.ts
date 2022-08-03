import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolios'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioHistory: Portfolio[] = [
    
    {
      id: 1,
      name: "React Portfolio",
      client: "Self",
      duration: "2 week",
      techStack: "React",
      description: "This is my first React website that went live, it is built on React with TailwindCSS ",
      image: "assets/portfolio/reactPortfolio.png",
      url: "https://monis8khan.github.io/monis8khan"
    },
    {
      id: 2,
      name: "Angular Portfolio",
      client: "Self",
      duration: "1 week",
      techStack: "Angular",
      description: "This is my first Angular website that went live, it is built on Angular with Bootstrap ",
      image: "assets/portfolio/angularPortfolio.png",
      url: "https://monis8khan.github.io/get_bootstrapped/get_bootstrapped/"
    },
    {
      id: 3,
      name: "Wix Portfolio",
      client: "Self",
      duration: "3 day",
      techStack: "Wix/Velo",
      description: "This is my portfolio which is built on wix.com. I made this portfolio within 2-3 days with complete designing and responsiveness.",
      image: "assets/portfolio/wixPortfolio.png",
      url:"https://dev8egg.wixsite.com/portfolio"
    },
  ];
  getPortfolioHistory() {
    return this.portfolioHistory;
  }

  constructor() { }
}