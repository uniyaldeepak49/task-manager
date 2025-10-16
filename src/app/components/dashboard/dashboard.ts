import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = {
    totalTasks: 24,
    completedTasks: 18,
    pendingTasks: 6,
    overdueTasks: 2
  };

  recentTasks = [
    { id: 1, title: 'Review quarterly report', status: 'Pending', priority: 'High', dueDate: '2024-01-20' },
    { id: 2, title: 'Client meeting preparation', status: 'Completed', priority: 'Medium', dueDate: '2024-01-18' },
    { id: 3, title: 'Update project timeline', status: 'Pending', priority: 'Low', dueDate: '2024-01-25' }
  ];

  weeklyProgress = [
    { day: 'Mon', completed: 3, pending: 2 },
    { day: 'Tue', completed: 5, pending: 1 },
    { day: 'Wed', completed: 2, pending: 4 },
    { day: 'Thu', completed: 4, pending: 2 },
    { day: 'Fri', completed: 6, pending: 1 },
    { day: 'Sat', completed: 1, pending: 3 },
    { day: 'Sun', completed: 2, pending: 2 }
  ];

  recentActivity = [
    { action: 'Completed task "Design Review"', time: '2 hours ago', icon: 'check-circle', color: 'success' },
    { action: 'Created new project "Mobile App"', time: '4 hours ago', icon: 'plus-circle', color: 'primary' },
    { action: 'Updated task priority', time: '6 hours ago', icon: 'arrow-up', color: 'warning' },
    { action: 'Assigned task to team member', time: '1 day ago', icon: 'person-plus', color: 'info' }
  ];

  upcomingDeadlines = [
    { task: 'Submit final report', date: '2024-01-20', priority: 'High' },
    { task: 'Team presentation', date: '2024-01-22', priority: 'Medium' },
    { task: 'Code review session', date: '2024-01-25', priority: 'Low' }
  ];

  get completionRate(): number {
    return Math.round((this.stats.completedTasks / this.stats.totalTasks) * 100);
  }

  get productivityTrend(): string {
    return this.completionRate > 70 ? 'up' : 'down';
  }
}