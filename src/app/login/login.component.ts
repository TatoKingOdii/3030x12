import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatInput, MatPrefix, MatSuffix} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../libs/services/auth-service/auth.service";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {NavContainerComponent} from "../nav-container/nav-container.component";
import {NavContentComponent} from "../nav-content/nav-content.component";
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatIcon,
    MatMiniFabButton,
    MatToolbar,
    NgIf,
    MatIconButton,
    MatPrefix,
    MatSuffix,
    HeaderComponent,
    NavContainerComponent,
    NavContentComponent,
    MatSidenavContent,
    MatSidenavContainer
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username?: string;
  password?: string;
  errorMsg?: string;
  hide: boolean = true;

  constructor(public readonly authService: AuthService) {}

  submitLogin() {
    this.authService.authenticate(
      {user: this.username, pass: this.password},
      '/dashboard',
      this.handleAuthenticationError)
  }
  handleAuthenticationError = (msg: string) => {
    console.log('Auth error message received: ' + msg);
    this.errorMsg = msg;
    this.username = undefined;
    this.password = undefined;
  }
}
