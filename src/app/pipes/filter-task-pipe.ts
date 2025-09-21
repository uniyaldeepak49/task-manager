import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'filterTask',
  // pure: false, // it is called now impure pipe so now it will run in every angular change detection
})
export class FilterTaskPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string, key: keyof Task): Task[] {
    console.log('Calling pipe, it is in use now');
    if (!tasks || !searchTerm) {
      return tasks;
    }

    const value = searchTerm.toLowerCase();
    return tasks.filter((task) => String(task[key]).toLowerCase().includes(value));
  }
}
