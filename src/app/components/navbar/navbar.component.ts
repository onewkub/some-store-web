import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  drawerOpen = false;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
