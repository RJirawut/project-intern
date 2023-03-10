import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent {
  @Input() sideButtonStatus: boolean = false;

  listMenu = [
    {
      routerlink:'home',
      logo:'assets/images/home.png',
      page:'Home',
    },
    {
      routerlink:'about',
      logo:'assets/images/about.png',
      page:'About',
    },
    {
      routerlink:'education',
      logo:'assets/images/education.png',
      page:'Education',
    },
    {
      routerlink:'skill',
      logo:'assets/images/skill.png',
      page:'Skill',
    },
    {
      routerlink:'contact',
      logo:'assets/images/contact.png',
      page:'Contact',
    }
  ];
}
