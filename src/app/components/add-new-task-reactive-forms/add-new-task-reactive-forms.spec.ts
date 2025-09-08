import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTaskReactiveForms } from './add-new-task-reactive-forms';

describe('AddNewTaskReactiveForms', () => {
  let component: AddNewTaskReactiveForms;
  let fixture: ComponentFixture<AddNewTaskReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTaskReactiveForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTaskReactiveForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
