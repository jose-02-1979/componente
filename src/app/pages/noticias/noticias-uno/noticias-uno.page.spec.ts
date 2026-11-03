import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasUnoPage } from './noticias-uno.page';

describe('NoticiasUnoPage', () => {
  let component: NoticiasUnoPage;
  let fixture: ComponentFixture<NoticiasUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
