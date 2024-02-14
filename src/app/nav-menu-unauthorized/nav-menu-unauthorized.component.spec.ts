import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuUnauthorizedComponent } from './nav-menu-unauthorized.component';

describe('NavMenuUnauthorizedComponent', () => {
  let component: NavMenuUnauthorizedComponent;
  let fixture: ComponentFixture<NavMenuUnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuUnauthorizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
