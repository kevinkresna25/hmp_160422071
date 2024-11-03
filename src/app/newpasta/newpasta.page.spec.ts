import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewpastaPage } from './newpasta.page';

describe('NewpastaPage', () => {
  let component: NewpastaPage;
  let fixture: ComponentFixture<NewpastaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewpastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
