import { Component, OnInit } from '@angular/core';
import { Certificates } from '../../interfaces/certificates';
import {CertificatesService} from '../../services/certificates.service'

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates!: Certificates[];
  constructor(private certs: CertificatesService) { }

  ngOnInit(): void {
    this.certificates = this.certs.getCertifcateHistory();
    this.certificates.forEach((item)=>{
      item.completion = monthNames[item.completionDate.getMonth()] +" "+item.completionDate.getFullYear();
    })
  }

}


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
/**
 * export interface Certificates {
    id: number;
    name: string;
    organization: string;
    completionDate: Date;
    url?: string;
    certificate: string;
    completion?: string;
  }
 */