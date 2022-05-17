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
      job: [
        {
          designation: "Javascript Developer",
          startDate: new Date('Dec 2021')
        }
      ]
    },
    {
      company: "Strugbits",
      location: "Karachi, Pakistan",
      type: "Full Time",
      job: [
        {
          designation: "Team Lead",
          startDate: new Date("Feb 2021"),
          endDate: new Date("Dec 2021")
        },
        {
          designation: "Javascript Developer",
          startDate: new Date("Oct 2020"),
          endDate: new Date("Feb 2021")
        }
      ]
    },
    {
      company: "Mechanic4u.pk",
      description: "Start-up business with friends, responsible of managing all the data flow of the website and backend cloud set-up for the organization",
      location: "Karachi, Pakistan",
      type: "Full Time",
      job: [
        {
          designation: "Software Engineer",
          startDate: new Date("May 2020"),
          endDate: new Date("June 2020")
        }
      ]
    },
    {
      company: "Gaditek",
      description: "Trainee Cloud Engineer at Cloudways.com, Gaditek.",
      location: "Karachi, Pakistan",
      type: "Full Time",
      job: [
        {
          designation: "Trainee Cloud Engineer",
          startDate: new Date("Feb 2020"),
          endDate: new Date("Apr 2020")
        }
      ]
    },
    {
      company: "EFU General Insurance Ltd.",
      location: "Karachi, Pakistan",
      type: "Internship",
      job: [
        {
          designation: "Internship Trainee",
          startDate: new Date("Apr 2019"),
          endDate: new Date("Jun 2019")
        }
      ]
    }
  ];

  getExperienceHistory(){
    return this.experienceHistory;
  }

  constructor() { }
}
