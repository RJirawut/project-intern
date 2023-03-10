import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  listContact = [
    {
      logo : 'assets/images/line.png',
      channel : 'Line ID',
      contact : 'jirawut1203',
    },
    {
      logo : 'assets/images/facebook.png',
      channel : 'Facebook',
      contact : 'jirawut1203',
    },
    {
      logo : 'assets/images/email.png',
      channel : 'Mail',
      contact : 'jirawut.ru@gmail.com',
    },
    {
      logo : 'assets/images/telephone.png',
      channel : 'Telaphone',
      contact : '098-2987229',
    }
  ]
}
