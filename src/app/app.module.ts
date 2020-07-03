import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppUiModule } from './app-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { MembersComponent } from './members/members.component';
import { FaqComponent } from './faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PublicationsComponent,
    MembersComponent,
    FaqComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
