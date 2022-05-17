import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../../interfaces/experience'

@Component({
  selector: 'app-desig',
  templateUrl: './desig.component.html',
  styleUrls: ['./desig.component.css']
})
export class DesigComponent implements OnInit {
  @Input() jobData!:Job[];
  constructor() { }

  ngOnInit(): void {
    this.jobData.forEach((item)=>{
      var startDate = item.startDate;
      var endDate = item.endDate;
      var durEnd = endDate? monthNames[endDate.getMonth()] +" "+ endDate.getFullYear() : "Present";
      item.dur = monthNames[startDate.getMonth()] + " " + startDate.getFullYear() +" - " +durEnd
    })
  }

}

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];