import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { TaskList } from './components/task-list/task-list';
import { Learning } from './components/learning/learning';
import { SignIn } from './components/sign-in/sign-in';
import { SignUp } from './components/sign-up/sign-up';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Calendar } from './components/calendar/calendar';
import { Reports } from './components/reports/reports';
import { authGuard } from './guards/auth-guard';
import { redirectGuard } from './guards/redirect.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    children: [],
  },
  {
    path: 'sign-in',
    component: SignIn,
    canActivate: [guestGuard],
  },
  {
    path: 'sign-up',
    component: SignUp,
    canActivate: [guestGuard],
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
    canActivate: [authGuard],
  },
  {
    path: 'task-list/:id',
    component: TaskList,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: 'projects',
    component: Projects,
    canActivate: [authGuard],
  },
  {
    path: 'calendar',
    component: Calendar,
    canActivate: [authGuard],
  },
  {
    path: 'reports',
    component: Reports,
    canActivate: [authGuard],
  },
  {
    path: 'learning',
    component: Learning,
  },
  {
    path: '**',
    component: NotFound,
  },
];
