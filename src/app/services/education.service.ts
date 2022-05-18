import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educational_history: Education[] = [
    {
      'id': 1,
      'Institute': 'Sir Syed Univeristy Of Engineering & Technology',
      'Year': '2016-2020',
      'Degree': 'Software Engineering',
      'Icon' : 'assets/education/hat.png'
    },
    {
      'id': 2,
      'Institute': 'Defence Authority Degree College (Phase 6 DHA)',
      'Year': '2013-2015',
      'Degree': 'Pre-Engineering',
      'Icon' : 'assets/education/degree.webp'
    },
    {
      'id': 3,
      'Institute': 'Education Trust Nasra School (Korangi Campus)',
      'Year': '2013-2015',
      'Degree': 'Computer Science',
      'Icon' : 'assets/education/school.png'
    }
  ];

  getEducationalHistory() {
    return this.educational_history;
  }


  constructor() {

  }
}
