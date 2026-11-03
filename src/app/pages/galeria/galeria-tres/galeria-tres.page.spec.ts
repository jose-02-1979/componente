import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaTresPage } from './galeria-tres.page';

describe('GaleriaTresPage', () => {
  let component: GaleriaTresPage;
  let fixture: ComponentFixture<GaleriaTresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
