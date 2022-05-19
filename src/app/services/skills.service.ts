import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skills[] = [
    {
      name: "Angular",
      percentage: "60%"
    },
    {
      name: "TypeScript",
      percentage: "50%"
    },
    {
      name: "JavaScript",
      percentage: "80%"
    },
    {
      name: "Linux",
      percentage: "50%"
    },
    {
      name: "Wix",
      percentage: "90%"
    },
    {
      name: "Velo",
      percentage: "90%"
    }, 
    {
      name: "NodeJs",
      percentage: "70%"
    }, 
    {
      name: "AWS",
      percentage: "40%"
    }, 
    {
      name: "HTML",
      percentage: "75%"
    }, {
      name: "CSS",
      percentage: "80%"
    }
  ];

  getSkills() {
    return this.skills;
  }
  constructor() { }
}
