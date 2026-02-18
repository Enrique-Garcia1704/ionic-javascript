import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstructuraPage } from './estructura.page';

describe('EstructuraPage', () => {
  let component: EstructuraPage;
  let fixture: ComponentFixture<EstructuraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
