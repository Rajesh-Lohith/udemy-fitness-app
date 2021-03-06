import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.sidenavToggle.emit();
  }
}
