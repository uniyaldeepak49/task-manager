import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TASK_LIST } from './task-test-data';
import { Status, Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = TASK_LIST;
  status = Status;

  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onTaskComplete(task: Task): void {
    if (task.status === Status.PENDING) {
      task.status = Status.COMPLETED;
    } else {
      task.status = Status.PENDING;
    }
  }
}
