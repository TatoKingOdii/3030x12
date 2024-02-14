import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../libs/services/auth-service/auth.service";

@Component({
  selector: 'app-nav-menu-authorized',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu-authorized.component.html',
  styleUrl: './nav-menu-authorized.component.scss'
})
export class NavMenuAuthorizedComponent {

  constructor(public readonly authService: AuthService) {}
}
