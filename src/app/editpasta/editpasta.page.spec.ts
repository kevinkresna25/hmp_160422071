import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditpastaPage } from './editpasta.page';

describe('EditpastaPage', () => {
  let component: EditpastaPage;
  let fixture: ComponentFixture<EditpastaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditpastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
