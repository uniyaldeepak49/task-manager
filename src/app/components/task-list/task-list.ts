import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItem } from './task-item/task-item';
import { Task, Status } from '../../interfaces/task';
import { TaskService } from '../../services/task-service';
import { AddNewTaskReactiveForms } from '../add-new-task-reactive-forms/add-new-task-reactive-forms';
import { CommonService } from '../../services/common-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule, TaskItem, AddNewTaskReactiveForms],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList implements OnInit {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = [];
  taskStatus = Status;
  id: number = 0;
  isTasksLoaded = false;

  private taskService = inject(TaskService);
  private commonService = inject(CommonService);
  // private taskService: TaskService
  // @Inject(TaskService) private taskService: TaskService;

  ngOnInit(): void {
    this.getTasks();
  }
  /**
   * Returns tasks list from service.
   */
  getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.isTasksLoaded = true;
        this.tasks = tasks;
        this.commonService.saveDataInLocalStorage('tasks', this.tasks);
      },
      error: (error: HttpErrorResponse) => {
        throw new Error('Error from tasks API', error.error);
      },
    });
  }

  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  onDeleteTask(id: number): void {
    this.tasks = this.taskService.deleteTask(this.tasks, id);
    this.commonService.saveDataInLocalStorage('tasks', this.tasks);
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
    this.commonService.saveDataInLocalStorage('tasks', this.tasks);
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
    this.commonService.saveDataInLocalStorage('tasks', this.tasks);

    this.id = 0;
  }
}
