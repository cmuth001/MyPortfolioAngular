import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HonorAwardsComponent } from './honor-awards/honor-awards.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PublicationsCertificationsComponent } from './publications-certifications/publications-certifications.component';
import { ResumeComponent } from './resume/resume.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  // { path: 'education', component: EducationComponent },
  { path: 'honor-awards', component: HonorAwardsComponent },
  { path: 'publication-certifications', component: PublicationsCertificationsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'resume', component: ResumeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HonorAwardsComponent,
    WorkExperienceComponent,
    PublicationsCertificationsComponent,
    ResumeComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
