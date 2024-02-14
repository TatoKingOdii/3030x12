import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuAuthorizedComponent } from './nav-menu-authorized.component';

describe('NavMenuAuthorizedComponent', () => {
  let component: NavMenuAuthorizedComponent;
  let fixture: ComponentFixture<NavMenuAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuAuthorizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
