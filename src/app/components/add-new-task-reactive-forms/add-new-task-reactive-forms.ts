import { Component, effect, input, OnInit, output, signal, Signal } from '@angular/core';
import {
  FormControl,
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
  readonly task = input<Signal<Task | null>>(signal(null));
  readonly reset = input<boolean>();
  readonly id = signal<number>(0);

  taskFormGroup: UntypedFormGroup = new UntypedFormGroup({
    id: new FormControl(0),
    title: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
    description: new UntypedFormControl('', Validators.required),
    status: new UntypedFormControl('', Validators.required),
  });

  addNewTaskEvent = output<Task>();
  updateTaskEvent = output<Task>();

  constructor() {
    effect(() => {
      this.id.set(this.task()()?.id ? (this.task()()?.id as number) : 0);

      if (this.id()) {
        // Populate values
        this.taskFormGroup.setValue(this.task()() as Task);
      } else {
        if (!this.taskFormGroup.pristine) {
          this.taskFormGroup.reset();
        }
      }
    });
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
        this.updateTaskEvent.emit(this.taskFormGroup.value);
      }
    }
  }
}
