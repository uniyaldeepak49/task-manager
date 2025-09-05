import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TASK_LIST } from './task-test-data';
import { Task } from '../interfaces/task';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = TASK_LIST;

  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
