import { Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/experience'
import {ExperienceService} from '../../services/experience.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceHistory?:Experience[];
  designationCard?: boolean;
  constructor(private exp:ExperienceService) { }

  ngOnInit(): void {
    this.experienceHistory = this.exp.getExperienceHistory();
    this.experienceHistory.forEach((item)=>{
      var startDate = item.job[item.job.length-1].startDate;
      var endDate = item.job[0].endDate; 
      var durEnd = endDate? monthNames[endDate.getMonth()] +" "+ endDate.getFullYear() : "Present";
      item.dur = monthNames[startDate.getMonth()] + " " + startDate.getFullYear() +" - " +durEnd
      item.desigCard = item.job.length>1 ? true:false;
    })
  }

}

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];