import { Component, input, output } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { CapitalizePipe } from '../../../pipes/capitalize-pipe';

@Component({
  selector: 'tr[code-for-beginners-task-item]',
  imports: [CapitalizePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  // @Input() task!: Task; // Input property
  readonly task = input.required<Task>();
  onTaskCompleteEvent = output<Task>();
  onDeleteTaskEvent = output<number>();
  onEditTaskEvent = output<number>();

  // @Output() onTaskCompleteEvent = new EventEmitter<Task>(); // Output property
  // @Output() onDeleteTaskEvent = new EventEmitter<number>(); // Output property

  /**
   * On task complete event emitted.
   * @param task
   */
  onTaskComplete(task: Task): void {
    this.onTaskCompleteEvent.emit(task);
  }
  /**
   * On task delete event emitted.
   * @param id
   */
  onDeleteTask(id: number): void {
    this.onDeleteTaskEvent.emit(id);
  }
  /**
   * On task edit event emitted.
   * @param id
   */
  onEditTask(id: number): void {
    this.onEditTaskEvent.emit(id);
  }
}
