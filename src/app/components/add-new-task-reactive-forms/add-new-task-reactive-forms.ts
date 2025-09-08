import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Task, Status } from '../../interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'code-for-beginners-add-new-task-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-task-reactive-forms.html',
  styleUrl: './add-new-task-reactive-forms.css',
})
export class AddNewTaskReactiveForms {
  submittedTask: Task | null = null;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    status: Status.PENDING,
  };
  taskFormGroup: UntypedFormGroup = new UntypedFormGroup({
    title: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
    description: new UntypedFormControl('', Validators.required),
    status: new UntypedFormControl('', Validators.required),
  });

  get form() {
    return this.taskFormGroup.controls;
  }
  /**
   * On Submit task form.
   * @param taskForm
   */
  onSubmit(): void {
    if (this.taskFormGroup.valid) {
      this.submittedTask = this.task; // made same reference of task property in submittedTask property
      this.submittedTask = { ...this.task }; // create a shallow copy of task property in submittedTask property

      this.submittedTask.title = 'deepak uniyal';

      console.log('submitted Task', this.submittedTask);
      console.log('original task', this.task);
    }
  }
}
