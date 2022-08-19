import { Injectable } from '@angular/core';
import { Services } from '../interfaces/services';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private servicesList: Services[] = [{
    id: 1,
    title: "Web Designing",
    description: `A creative and attractive website can not only showcase the creative side of your brand but also elaborate what you
     specialize in. We give you the professional experience of revamping your business website with unique themes and a creative and 
     aesthetically pleasing channel to further elaborate your professional portfolio. Create a website alongside us which shows what
     your business is all about, customize each and every aspect of your page with an
     experienced team of software engineers and designers to highlight your creativity. `
  }, {
    id: 2,
    title: "Web Development",
    description: `Having trouble engaging clients?
    This is most common when a website is not user-friendly, making it tough for visitors to browse. I am here to help you with all of your issues.
    Our Web Development team specialises in building websites and giving you with the tools you need to keep track of consumer interactions on the site 
    via CRM and other customised adjustments to ensure a functional and user-friendly interface.
    Everything will be provided in one straightforward site, including what you supply, what you require, and who you are.  `
  }, 
  // {
  //   id: 3,
  //   title: "Designing & Branding",
  //   description: `How can you make your company stand out?
  //   Allow us to assist you in developing a unique logo and design for your business.
  //   I can help you create your own unique logo, brand image, posters, and gifs, whether it's something profound and detailed or something simple and edgy.
  //   I am the best person to help you with this.
  //   Our specialty is translating your vision into reality through design and branding. `
  // }, {
  //   id: 4,
  //   title: "Digital Marketing",
  //   description: `Do you want to boost your traffic and consumer base?
  //   Digital marketing, on the other hand, is the modern way of marketing.
  //   I can help you grow your business and build an online rapport with your potential clients because everyone nowadays is online.
  //   We use social media engagement tools and other marketing approaches such as SEO, social media marketing, 
  //   content marketing strategies, and more to ensure that you acquire attention.`
  // }
  ];
  getServicesList() {
    return this.servicesList;
  }

  getService(id: number) {
    return this.servicesList[id]
  }

  constructor() { }
}
