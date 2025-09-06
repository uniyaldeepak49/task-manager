import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Status, Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = [];
  status = Status;
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
    this.tasks = this.taskService.deleteTask(id);
  }
  /**
   * On Change mark task completed.
   * @param task
   *
   */
  onTaskComplete(task: Task): void {
    if (task.status === Status.PENDING) {
      task.status = Status.COMPLETED;
    } else {
      task.status = Status.PENDING;
    }
  }
}
