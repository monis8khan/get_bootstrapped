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
      certificate: "https://drive.google.com/file/d/1DVkSSvENC9nZmG3JCZIBdLObUGLBaqrp/view?usp=sharing",
    },
    {
      id: 2,
      name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
      organization: "Udemy",
      completionDate: new Date(2020, 2),
      certificate: "https://drive.google.com/file/d/1Exwe5z51YL4a00ZizgKG2QORSYq96qv0/view?usp=sharing",
    },
    {
      id: 3,
      name: "Step By Step - Setting Up WordPress VPS for Beginners",
      organization: "Udemy",
      completionDate: new Date(2020, 3),
      certificate: "https://drive.google.com/file/d/1tIJ-DRX_T8xskZfyOtk3J1KNfd7_5Ieq/view?usp=sharing",
    },
  ];

  getCertifcateHistory(){
    return this.certificatesHistory;
  }

  constructor() { }
}

