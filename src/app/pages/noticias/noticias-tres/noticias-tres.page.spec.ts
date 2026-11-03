import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasTresPage } from './noticias-tres.page';

describe('NoticiasTresPage', () => {
  let component: NoticiasTresPage;
  let fixture: ComponentFixture<NoticiasTresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
