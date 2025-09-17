import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { TaskList } from './components/task-list/task-list';
import { Learning } from './components/learning/learning';

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
    path: 'task-list/:id',
    component: TaskList,
  },
  {
    path: 'learning',
    component: Learning
  },
  {
    path: '**',
    component: NotFound,
  },
];
