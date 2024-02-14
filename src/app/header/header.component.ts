import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NavService} from "../../libs/services/nav-service/nav.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public readonly navService: NavService) {}

}
