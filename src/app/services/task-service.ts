import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { TASK_LIST } from '../components/task-list/task-test-data';
import { CommonService } from './common-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private commonService = inject(CommonService);

  /**
   * Returns task list
   * @returns {Task[]}
   */
  getTasks(): Task[] {
    const tasksFromLocalStorage = this.commonService.getDataFromLocalStorage<Task[]>('tasks');
    const tasks: Task[] =
      tasksFromLocalStorage && tasksFromLocalStorage.length > 0 ? tasksFromLocalStorage : TASK_LIST;

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
}
