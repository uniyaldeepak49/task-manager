import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseService = inject(BaseService);

  /**
   * Returns task list
   * @returns {Task[]}
   */
  getTasks(): Observable<Task[]> {
    return this.baseService.get('tasks');
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
