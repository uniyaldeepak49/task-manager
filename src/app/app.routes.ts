import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { TaskList } from './components/task-list/task-list';
import { Learning } from './components/learning/learning';
import { SignIn } from './components/sign-in/sign-in';
import { SignUp } from './components/sign-up/sign-up';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
  {
    path: 'sign-up',
    component: SignUp,
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
    component: Learning,
  },
  {
    path: '**',
    component: NotFound,
  },
];
