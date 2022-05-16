import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educational_history: Education[] = [
    {
      'id': 1,
      'Institute': 'Sir Syed Univeristy Of Engineering and Technology',
      'Year': '2016-2020',
      'Degree': 'Software Engineering',
    },
    {
      'id': 2,
      'Institute': 'Defence Authority Degree College',
      'Year': '2013-2015',
      'Degree': 'Pre-Engineering',
    },
    {
      'id': 3,
      'Institute': 'Education Trust Nasra School',
      'Year': '2013-2015',
      'Degree': 'Pre-Engineering',
    }
  ];

  getEducationalHistory() {
    return this.educational_history;
  }


  constructor() {

  }
}
