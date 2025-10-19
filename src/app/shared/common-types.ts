import { Task } from '../interfaces/task';

export interface CreateModifyTask {
  action: 'Edit' | 'Update';
  task: Task;
}
