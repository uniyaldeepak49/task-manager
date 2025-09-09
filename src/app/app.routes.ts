import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { TaskList } from './components/task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'task-list',
    component: TaskList,
  },
  {
    path: '**',
    component: NotFound,
  },
];
