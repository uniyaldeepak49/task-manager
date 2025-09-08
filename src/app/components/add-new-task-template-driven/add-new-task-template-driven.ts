import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Status, Task } from '../../interfaces/task';

@Component({
  selector: 'code-for-beginners-add-new-task-template-driven',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-task-template-driven.html',
  styleUrl: './add-new-task-template-driven.css',
})
export class AddNewTaskTemplateDriven {
  submittedTask: Task | null = null;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    status: Status.PENDING,
  };
  /**
   * On Submit task form.
   * @param taskForm
   */
  onSubmit(taskForm: NgForm): void {
    if (taskForm.valid) {
      this.submittedTask = this.task; // made same reference of task property in submittedTask property
      this.submittedTask = { ...this.task }; // create a shallow copy of task property in submittedTask property

      this.submittedTask.title = 'deepak uniyal';

      console.log('submitted Task', this.submittedTask);
      console.log('original task', this.task);
    }
  }
}
