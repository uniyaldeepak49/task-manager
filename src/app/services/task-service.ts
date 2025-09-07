import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { TASK_LIST } from '../task-list/task-test-data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  /**
   * Returns task list
   * @returns {Task[]}
   */
  getTasks(): Task[] {
    const tasks: Task[] = TASK_LIST;
    return tasks;
  }
  /**
   * Delete the task and returns the refined task list.
   * @param task
   * @returns {Task[]}
   */
  deleteTask(tasks: Task[], id: number): Task[] {
    const refinedTasks: Task[] = tasks.filter((t: Task) => t.id !== id);
    return refinedTasks;
  }
  addTask(): void {}
  editTask(): void {}
}
