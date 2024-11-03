import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastaPage } from './pasta.page';

describe('PastaPage', () => {
  let component: PastaPage;
  let fixture: ComponentFixture<PastaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
