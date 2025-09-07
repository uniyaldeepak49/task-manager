import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Status, Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task-service';
import { TaskItem } from './task-item/task-item';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = [];
  taskStatus = Status;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    status: Status.PENDING,
  };
  submittedTask: Task | null = null;
  private taskService = inject(TaskService);
  // private taskService: TaskService
  // @Inject(TaskService) private taskService: TaskService;

  constructor() {
    this.tasks = this.taskService.getTasks();
  }
  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  deleteTask(id: number): void {
    this.tasks = this.taskService.deleteTask(this.tasks, id);
  }
  /**
   * On Change mark task completed.
   * @param task
   *
   */
  onTaskComplete(task: Task): void {
    task.status = task.status === Status.PENDING ? Status.COMPLETED : Status.PENDING;
  }
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
