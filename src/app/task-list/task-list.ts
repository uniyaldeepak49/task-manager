import { Component } from '@angular/core';
import { Status, Task } from '../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskTitle: string = 'Task title 1';
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'I am creating a session to develop toDo application in Angular',
      status: Status.PENDING,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'I have to learn HTML from w3school website',
      status: Status.PENDING,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'I have to learn JavaScript from w3school website',
      status: Status.PENDING,
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'I have to learn CSS from w3school website',
      status: Status.PENDING,
    },
    {
      id: 5,
      title: 'Task 5',
      description:
        'I have to watch all the sessions in Code For Beginner youtube channel to learn Angular from Beginner to Advanced',
      status: Status.PENDING,
    },
  ];

  /**
   * Deletes the task from task list by ID.
   * @param id
   * @returns {void}
   */
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
