import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/interfaces/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Services[] = [{
    id: 1,
    title: "webDev",
    description: `A creative and attractive website can not only showcase the creative side of your brand but also
                        elaborate what you specialize in. We give you the professional experience of revamping your business
                        website with unique themes and a creative and aesthetically pleasing channel to further elaborate
                        your professional portfolio. Create a website alongside us which shows what your business is all
                        about, customize each and every aspect of your page with an experienced team of software engineers
                        and designers to highlight your creativity.`
  }, {
    id: 2,
    title: "UI/UX",
    description:  `A creative and attractive website can not only showcase`
   }
  ]
  data: Services = this.services[0]
  constructor() { }

  ngOnInit(): void {
  }

  serviceClick(event: Event, value: string){
    value === "uiux" ? this.data = this.services[1] : this.data = this.services[0] 
  }
}
