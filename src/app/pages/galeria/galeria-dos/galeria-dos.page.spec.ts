import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaDosPage } from './galeria-dos.page';

describe('GaleriaDosPage', () => {
  let component: GaleriaDosPage;
  let fixture: ComponentFixture<GaleriaDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
