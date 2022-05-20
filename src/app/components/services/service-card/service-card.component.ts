import { Component, OnInit, Input } from '@angular/core';
import { Services } from 'src/app/interfaces/services';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() serviceData!: Services;
  title?: string;
  constructor() { }

  ngOnInit(): void {
    this.title = this.serviceData.title;
  }

}
