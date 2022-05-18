import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolios'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioHistory: Portfolio[] = [
    {
      id: 1,
      name: "My Wix Site",
      client: "Self",
      duration: "1 day",
      techStack: "Wix/Velo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://images01.nicepage.com/page/31/08/website-template-31086.jpg",
    },
    {
      id: 2,
      name: "string",
      client: "string",
      duration: "string",
      techStack: "string",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://images01.nicepage.com/page/31/08/website-template-31086.jpg",
    },
    {
      id: 3,
      name: "string",
      client: "string",
      duration: "string",
      techStack: "string",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://images01.nicepage.com/page/31/08/website-template-31086.jpg",
    }
  ];
  getPortfolioHistory() {
    return this.portfolioHistory;
  }

  constructor() { }
}