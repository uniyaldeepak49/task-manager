import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  currentDate = new Date();
  events = [
    { date: '2024-01-15', title: 'Team Meeting', time: '10:00 AM' },
    { date: '2024-01-16', title: 'Project Deadline', time: '5:00 PM' },
    { date: '2024-01-18', title: 'Client Presentation', time: '2:00 PM' }
  ];
}