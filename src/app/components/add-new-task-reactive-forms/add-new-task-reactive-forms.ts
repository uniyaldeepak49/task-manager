import { Component, input, OnInit, output } from '@angular/core';
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
export class AddNewTaskReactiveForms implements OnInit {
  readonly id = input<number>();
  readonly tasks = input<Task[]>();

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

  addNewTaskEvent = output<Task>();

  ngOnInit(): void {
    debugger;
    if (this.id()) {
      // Editable is required
      const task: Task | undefined = this.tasks()?.find((task: Task) => task.id === this.id());
      this.taskFormGroup.patchValue({
        title: task?.title,
        description: task?.description,
        status: task?.status,
      });
    }
  }

  get form() {
    return this.taskFormGroup.controls;
  }
  /**
   * On Submit task form.
   * @param taskForm
   */
  onSubmit(): void {
    if (this.taskFormGroup.valid) {
      if (!this.id()) {
        this.addNewTaskEvent.emit(this.taskFormGroup.value);
      } else {
        // Fire the edit task event
      }
    }
  }
}
