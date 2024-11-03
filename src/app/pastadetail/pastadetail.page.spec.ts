import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastadetailPage } from './pastadetail.page';

describe('PastadetailPage', () => {
  let component: PastadetailPage;
  let fixture: ComponentFixture<PastadetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastadetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
