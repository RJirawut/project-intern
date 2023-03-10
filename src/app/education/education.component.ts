import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  listEducation = [
    {
      level:'Bachelors Degree',
      logo:"assets/images/logo-psu.png",
      institute:'Prince of Songkla University',
      major: 'B.Sc. Information and Comunication Technology',
      year: '2019 - Current',
    },
    {
      level:'Senior high School',
      logo:"assets/images/logo-kp.png",
      institute:'Khonhadprachason School',
      year: '2016 - 2019',
    },
    {
      level:'Junior high School',
      logo:"assets/images/logo-kp.png",
      institute:'Khonhadprachason School',
      year: '2013 - 2016',
    },
    {
      level:'Elementary School',
      logo:"assets/images/logo-bk.png",
      institute:'Ban Khonhat School',
      year: '2007-2013',
    }
  ]
}
