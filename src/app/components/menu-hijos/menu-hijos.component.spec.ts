import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHijosComponent } from './menu-hijos.component';

describe('MenuHijosComponent', () => {
  let component: MenuHijosComponent;
  let fixture: ComponentFixture<MenuHijosComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
