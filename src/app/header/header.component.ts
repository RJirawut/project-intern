import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideButton = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  SideButton() {
    this.menuStatus = !this.menuStatus;
    this.sideButton.emit(this.menuStatus);
  }
}
