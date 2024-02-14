import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-nav-menu-unauthorized',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu-unauthorized.component.html',
  styleUrl: './nav-menu-unauthorized.component.scss'
})
export class NavMenuUnauthorizedComponent {

}
