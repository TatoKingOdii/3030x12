import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../libs/services/auth-service/auth.service";
import {NavService} from "../../libs/services/nav-service/nav.service";
import {NavContentComponent} from "../nav-content/nav-content.component";
import {NavMenuAuthorizedComponent} from "../nav-menu-authorized/nav-menu-authorized.component";
import {NavMenuUnauthorizedComponent} from "../nav-menu-unauthorized/nav-menu-unauthorized.component";

@Component({
  selector: 'app-nav-container',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    NgIf,
    RouterLink,
    RouterLinkActive,
    NavContentComponent,
    NavMenuAuthorizedComponent,
    NavMenuUnauthorizedComponent,
    AsyncPipe
  ],
  templateUrl: './nav-container.component.html',
  styleUrl: './nav-container.component.scss'
})
export class NavContainerComponent {

  constructor(public readonly authService: AuthService, public readonly navService: NavService) {
  }
}
