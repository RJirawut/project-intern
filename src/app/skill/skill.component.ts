import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  listSkill1 = [
    {
      logo: 'assets/images/HTML.png',
      language:'HTML',
      percen:'80%'
    },
    {
      logo: 'assets/images/CSS.png',
      language:'CSS',
      percen:'60%'
    },
    {
      logo: 'assets/images/JavaScript.png',
      language:'JavaScript',
      percen:'40%'
    },
    {
      logo: 'assets/images/php.png',
      language:'PHP',
      percen:'40%'
    },
    {
      logo: 'assets/images/Angular.png',
      language:'JavaScript',
      percen:'30%'
    },
  ]

  listSkill2 = [
    {
      logo: 'assets/images/C.png',
      language:'C',
      percen:'70%'
    },
    {
      logo: 'assets/images/Java.png',
      language:'Java',
      percen:'40%'
    },
    {
      logo: 'assets/images/Python.png',
      language:'Python',
      percen:'25%'
    },
    {
      logo: 'assets/images/Flutter.png',
      language:'Flutter',
      percen:'30%'
    },
    {
      logo: 'assets/images/Assembly.png',
      language:'Assembly',
      percen:'20%'
    },
  ]
}
