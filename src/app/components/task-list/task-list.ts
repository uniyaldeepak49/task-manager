import { Component, computed, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, SlicePipe } from '@angular/common';
import { TaskItem } from './task-item/task-item';
import { Task, Status } from '../../interfaces/task';
import { TaskService } from '../../services/task-service';
import { AddNewTaskReactiveForms } from '../add-new-task-reactive-forms/add-new-task-reactive-forms';
import { CommonService } from '../../services/common-service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, Subscription, take } from 'rxjs';
import { FilterTaskPipe } from '../../pipes/filter-task-pipe';
import { toSignal } from '@angular/core/rxjs-interop';
interface TaskState {
  loading: boolean;
  data: Task[];
  error: string | null;
}
@Component({
  selector: 'code-for-beginners-task-list',
  imports: [CommonModule, FormsModule, TaskItem, AddNewTaskReactiveForms, FilterTaskPipe],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  taskStatus = Status;
  searchTerm = '';
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 2;

  Math = Math;

  private taskService = inject(TaskService);
  private commonService = inject(CommonService);
  subscription: Subscription = Subscription.EMPTY;
  tasks = signal<Task[]>([]);
  isTasksLoaded = signal<boolean>(false);
  task = signal<Task | null>(null);
  taskState$ = this.taskService.getTasks().pipe(
    take(1),
    map(
      (tasks: Task[]): TaskState => ({
        loading: false,
        data: tasks,
        error: null,
      })
    ),
    catchError(
      (err): Observable<TaskState> =>
        of({
          loading: false,
          data: [],
          error: err?.message || String(err),
        })
    )
  );
  taskStateSignal = toSignal<TaskState>(this.taskState$);

  constructor() {
    let prevJson = '';
    effect(() => {
      const state = this.taskStateSignal();
      const incoming = JSON.stringify(state?.data ?? []);

      this.tasks.set(state?.data || []);

      // this.commonService.saveDataInLocalStorage('tasks', this.tasks());
      this.isTasksLoaded.set(state?.loading as boolean);
    });
  }

  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  onDeleteTask(id: number): void {
    this.tasks.set(this.taskService.deleteTask(this.tasks(), id));
    this.commonService.saveDataInLocalStorage('tasks', this.tasks());
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
    this.tasks.set([...this.tasks(), newTask]);
    this.commonService.saveDataInLocalStorage('tasks', this.tasks());
  }

  /**
   * Returns max ID
   * @returns {number}
   */
  getIncrementedId(): number {
    return this.tasks().length ? Math.max(...this.tasks().map((task) => task.id)) + 1 : 1;
  }
  onEditTask(id: number): void {
    this.task.set(this.tasks()?.find((task) => task.id === id) as Task);
  }
  onUpdateTask(task: Task): void {
    let toUpdateTask: Task | undefined = this.tasks().find((t: Task) => t.id === task.id);
    toUpdateTask = task as Task;

    this.tasks.update((list) => list.map((t) => (t.id === task.id ? { ...task } : t)));

    console.log('Task list after update', this.tasks());
    this.commonService.saveDataInLocalStorage('tasks', this.tasks());
    this.task.set(null);
  }

  readonly getPaginatedTasks = computed(() => {
    console.log('Tasks', this.tasks());

    const filteredTasks = this.tasks().filter((task) =>
      task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filteredTasks.slice(startIndex, startIndex + this.itemsPerPage);
  });

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  readonly totalPages = computed(() => {
    const filteredTasks = this.tasks().filter((task) =>
      task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(filteredTasks.length / this.itemsPerPage);
  });

  readonly pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
}
