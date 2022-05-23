import { Injectable } from '@angular/core';
import { Certificates } from '../interfaces/certificates';
@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  certificatesHistory: Certificates[] = [
    {
      id: 1,
      name: "Angular Basics",
      organization: "Simplilearn",
      completionDate: new Date(2022, 2),
      certificate: "assets/certs/angular.png",
    },
    {
      id: 2,
      name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
      organization: "Udemy",
      completionDate: new Date(2020, 2),
      certificate: "assets/certs/linux.jpg",
    },
    {
      id: 3,
      name: "Step By Step - Setting Up WordPress VPS for Beginners",
      organization: "Udemy",
      completionDate: new Date(2020, 3),
      certificate: "assets/certs/wp-linux.jpg",
    },
  ];

  getCertifcateHistory(){
    return this.certificatesHistory;
  }

  constructor() { }
}

