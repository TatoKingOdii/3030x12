import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  navOpen : boolean = false;
  constructor() { }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  isNavOpen() : boolean {
    return this.navOpen;
  }

  closeNav() {
    this.navOpen = false;
  }
}
