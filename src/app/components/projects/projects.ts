import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      id: 1,
      name: 'Website Redesign',
      progress: 75,
      tasks: 12,
      completed: 9,
      deadline: '2024-02-15',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      progress: 45,
      tasks: 20,
      completed: 9,
      deadline: '2024-03-01',
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      progress: 90,
      tasks: 8,
      completed: 7,
      deadline: '2024-01-30',
    },
  ];
}
