import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaUnoPage } from './galeria-uno.page';

describe('GaleriaUnoPage', () => {
  let component: GaleriaUnoPage;
  let fixture: ComponentFixture<GaleriaUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
