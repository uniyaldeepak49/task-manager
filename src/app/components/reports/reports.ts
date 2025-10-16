import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  productivityData = {
    thisWeek: 85,
    lastWeek: 78,
    thisMonth: 82,
    lastMonth: 75
  };

  tasksByStatus = [
    { status: 'Completed', count: 45, percentage: 60 },
    { status: 'In Progress', count: 20, percentage: 27 },
    { status: 'Pending', count: 10, percentage: 13 }
  ];
}