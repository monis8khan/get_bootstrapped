import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skills[] = [
    {
      name: "Angular",
      icon: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
    },
    {
      name: "TypeScript",
      icon: "data:image/png;base64,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"
    },
    {
      name: "JavaScript",
      icon: "data:image/jpeg;base64,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"
    },
    {
      name: "ReactJs",
      icon: "https://ionicframework.com/docs/icons/logo-react-icon.png"
    }, {
      name: "Bootstrap",
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
    }, {
      name: "TailwindCSS",
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
    },
    {
      name: "Velo",
      icon: "https://raw.githubusercontent.com/shoonia/vscode-corvid/master/icons/velo.png"
    },
    {
      name: "NodeJs",
      icon: "data:image/png;base64,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"
    },
    {
      name: "HTML",
      icon: "https://cdn.cdnlogo.com/logos/h/84/html.svg"
    }, {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
    },
    {
      name: "AWS",
      icon: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png"
    },
    {
      name: "Linux",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
    },
  ];

  getSkills() {
    return this.skills;
  }
  constructor() { }
}
