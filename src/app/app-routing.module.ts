import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full'},
  {path:'home' ,component: HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'education' ,component:EducationComponent},
  {path:'skill' ,component:SkillComponent},
  {path:'contact' ,component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
