import { Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/experience'
import {ExperienceService} from '../../services/experience.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceHistory:Experience[] = [];

  


  constructor(private exp:ExperienceService) { }

  ngOnInit(): void {
    this.experienceHistory = this.exp.getExperienceHistory();
    console.log(this.experienceHistory);
  }

}
