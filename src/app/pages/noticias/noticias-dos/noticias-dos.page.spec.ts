import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasDosPage } from './noticias-dos.page';

describe('NoticiasDosPage', () => {
  let component: NoticiasDosPage;
  let fixture: ComponentFixture<NoticiasDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
