import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[]=[];
  constructor(private skl: SkillsService) { }

  ngOnInit(): void {
    this.skills = this.skl.getSkills();
  }

}
