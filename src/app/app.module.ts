import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EducationComponent,
    HeaderComponent,
    HomeComponent,
    LeftmenuComponent,
    SkillComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
