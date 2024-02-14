import {Component, OnInit} from '@angular/core';
import {ListComponent} from "../list/list.component";
import {ContentService} from "../../libs/services/content-service/content.service";
import {DetailComponent} from "../detail/detail.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {AuthService} from "../../libs/services/auth-service/auth.service";
import {UnauthorizedComponent} from "../unauthorized/unauthorized.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BehaviorSubject, filter} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ListComponent,
    DetailComponent,
    NgIf,
    UnauthorizedComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(public readonly contentService: ContentService,
              public readonly authService: AuthService,
              public readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    //Rely on the id in the route to know what content to select
    this.route.params.subscribe(params => {
      if (params) {
        let id = params['id'];
        console.log(`Dashboard OnInit SC: ${id ? id : null}`)
        this.contentService.selectContentById(id);
      }
    });
  }
}
