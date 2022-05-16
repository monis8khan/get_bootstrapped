import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {

  educationalHistory: Education[]= []

  getEducationalHistory(){   
    console.log("Educational History: ",this.educationalHistory) 
  }


  constructor(private edu: EducationService) { }

  ngOnInit(): void {
    this.educationalHistory = this.edu.getEducationalHistory()
  }

}
