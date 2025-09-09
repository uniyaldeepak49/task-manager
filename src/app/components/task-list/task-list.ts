import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItem } from './task-item/task-item';
import { Task, Status } from '../../interfaces/task';
import { TaskService } from '../../services/task-service';
import { AddNewTaskReactiveForms } from '../add-new-task-reactive-forms/add-new-task-reactive-forms';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule, TaskItem, AddNewTaskReactiveForms],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = [];
  taskStatus = Status;

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
}
