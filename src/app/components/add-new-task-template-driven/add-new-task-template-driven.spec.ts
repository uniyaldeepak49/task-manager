import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTaskTemplateDriven } from './add-new-task-template-driven';

describe('AddNewTaskTemplateDriven', () => {
  let component: AddNewTaskTemplateDriven;
  let fixture: ComponentFixture<AddNewTaskTemplateDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTaskTemplateDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTaskTemplateDriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
