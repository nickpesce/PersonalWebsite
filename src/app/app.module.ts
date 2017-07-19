import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MessagingService} from './messaging.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBubbleComponent } from './chat/chat-bubble/chat-bubble.component';
import { ResumeComponent } from './resume/resume.component';
import { SuperMagicalLovePartyComponent } from './projects/super-magical-love-party/super-magical-love-party.component';
import { LitComponent } from './projects/lit/lit.component';
import { DinezenComponent } from './projects/dinezen/dinezen.component';
import { PlacesComponent } from './projects/places/places.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BioComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ChatComponent,
    ChatBubbleComponent,
    ResumeComponent,
    SuperMagicalLovePartyComponent,
    LitComponent,
    DinezenComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
