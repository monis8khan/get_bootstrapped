import { Injectable } from '@angular/core';
import { Services } from '../interfaces/services';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private servicesList: Services[] = [{
    id: 1,
    title: "Web Designing",
    description: `A creative and attractive website can not only showcase the creative side of your brand but also
    elaborate what you specialize in. We give you the professional experience of revamping your business
    website with unique themes and a creative and aesthetically pleasing channel to further elaborate
    your professional portfolio. Create a website alongside us which shows what your business is all
    about, customize each and every aspect of your page with an experienced team of software engineers
    and designers to highlight your creativity.`
  }, {
    id: 2,
    title: "Web Development",
    description: `Difficulty in engaging clients? This mainly happens when a website is not user friendly making it
    difficult for people to navigate through it. Strugbits is here to solve all your problems. Our Web
    Development team specializes in creating websites and providing you with necessary tools to keep
    track of the customer interaction on the website through CRM and other customized modifications to
    ensure a useful and an extremely user-friendly interface. What you provide, what you require and who
    you are, everything will be presented in one simple site. `
  }, {
    id: 3,
    title: "Designing & Branding",
    description: `How to make your business stand out? Let us help you in creating a specific logo and design for your
    company. Whether it is something meaningful and intricate or something simple and edgy Strugbits can
    provide you with creative tools in making your own special logo, brand image, posters and gifs.
    Uniquely branding your business to differentiate from you competitors will help you solidify
    yourself in the market and there is no better one to guide you through it than Strugbits. Our niche
    is designing and branding your vision into your reality.`
  }, {
    id: 4,
    title: "Digital Marketing",
    description: `Want to increase traffic and gain more customers? Well, digital marketing is the new way of
    marketing. As everyone nowadays is online, Strugbits can help you boost your business and can create
    and online rapport between you and your potential clients. We make sure that you gain attraction by
    using social media engagement tools and different marketing methods like SEO, Social media
    marketing, content marketing strategies and much more. `
  }
  ];
  getServicesList() {
    return this.servicesList;
  }

  getService(id: number) {
    return this.servicesList[id]
  }

  constructor() { }
}
