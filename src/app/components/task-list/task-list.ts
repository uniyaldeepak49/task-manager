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
  id: number = 0;

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
  onDeleteTask(id: number): void {
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
   * On Add new task
   * @param newTask
   */
  onAddNewTask(newTask: Task): void {
    const id: number = this.getIncrementedId();
    newTask.id = id;
    this.tasks.push(newTask);
  }

  /**
   * Returns max ID
   * @returns {number}
   */
  getIncrementedId(): number {
    return this.tasks.length ? Math.max(...this.tasks.map((task) => task.id)) + 1 : 1;
    // let id: number = 0;
    // if (this.tasks.length) {
    //   id = Math.max(...this.tasks.map((task) => task.id)) + 1; // [1,2,3,4,5] ==> 1,2,3,4,5
    // } else {
    //   id = 1;
    // }

    // return id;
  }
  onEditTask(id: number): void {
    this.id = id;
  }
  onUpdateTask(task: Task): void {
    let toUpdateTask: Task | undefined = this.tasks.find((t: Task) => t.id === task.id);
    toUpdateTask = task as Task;
    this.tasks = this.tasks.map((t) => {
      if (t.id === task.id) {
        t = task;
      }
      return t;
    });

    this.id = 0;
  }
}
