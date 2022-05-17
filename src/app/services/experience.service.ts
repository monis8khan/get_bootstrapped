import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceHistory: Experience[] = [
    {
      company: "TRAFiX LLC",
      location: "Karachi, Pakistan",
      type: "Full Time",
      description:"Creating and upgrading forms using servoy, debugging, enhancing the functionality, developing new features in the current system.",
      job: [
        {
          designation: "Javascript Developer",
          startDate: new Date(2021, 11)
        }
      ],
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGRzGNsseVH1Q/company-logo_200_200/0/1519903742534?e=2147483647&v=beta&t=mKUMulqxtZbVA-EfjyOh2lqS2DPAWS2fI6ycpyXD5dQ"
    },
    {
      company: "Strugbits",
      location: "Karachi, Pakistan",
      type: "Full Time",
      description:"Creating websites with wix.com, creating custom functionality with wix-velo api, integrating 3rd party applications using REST APIs, converting PSD to Wix-websites, debugging errors, research work of new upcoming projects.",
      job: [
        {
          designation: "Team Lead",
          startDate: new Date(2021, 1),
          endDate: new Date(2021, 11)
        },
        {
          designation: "Javascript Developer",
          startDate: new Date(2020, 9),
          endDate: new Date(2020, 1)
        }
      ], 
      logo: "https://static.wixstatic.com/media/ebd79e_84d94839d03246329d98f725244ad69a~mv2.png/v1/fit/w_2500,h_1330,al_c/ebd79e_84d94839d03246329d98f725244ad69a~mv2.png"
    },
    {
      company: "Mechanic4u.pk",
      description: "Start-up business with friends, responsible of managing all the data flow of the website and backend cloud set-up for the organization",
      location: "Karachi, Pakistan",
      type: "Full Time",
      job: [
        {
          designation: "Software Engineer",
          startDate: new Date(2020, 4),
          endDate: new Date(2020, 5)
        }
      ],
      logo: "http://mechanic4u.pk/wp-content/uploads/2020/04/Mechanic4u.png"
    },
    {
      company: "Gaditek",
      description: "Setting up a VPS cloud from scratch, Managing/Securing Cloud, Setting up a WordPress site on your cloud and deploying it, Setting up cache servers.. etc.",
      location: "Karachi, Pakistan",
      type: "Full Time",
      job: [
        {
          designation: "Trainee Cloud Engineer",
          startDate: new Date(2020, 1),
          endDate: new Date(2020, 3)
        }
      ],
      logo: "https://www.gaditek.com/wp-content/uploads/2019/02/Gaditek-logo.png"
    },
    {
      company: "EFU General Insurance Ltd.",
      location: "Karachi, Pakistan",
      type: "Internship",
      description:"Learning overall insurance processes, Network overview & Overview of development models of their ERP.",
      job: [
        {
          designation: "Internship Trainee",
          startDate: new Date(2019, 3),
          endDate: new Date(2019, 5)
        }
      ],
      logo:"https://d1e6cjojnyo6nm.cloudfront.net/provider_images/HIwbNYLh.jpg"
    }
  ];

  getExperienceHistory(){
    return this.experienceHistory;
  }

  constructor() { }
}
