import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ToolsComponent } from './components/tools/tools.component';
import { DesigComponent } from './components/experience/desig/desig.component';
import { PortfolioCardComponent } from './components/portfolio/portfolio-card/portfolio-card.component';
import { ServiceCardComponent } from './components/services/service-card/service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    PortfolioComponent,
    ServicesComponent,
    ToolsComponent,
    DesigComponent,
    PortfolioCardComponent,
    ServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
