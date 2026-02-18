import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunesPage } from './comunes.page';

describe('ComunesPage', () => {
  let component: ComunesPage;
  let fixture: ComponentFixture<ComunesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
