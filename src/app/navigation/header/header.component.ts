import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  isAuth: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {}
}
