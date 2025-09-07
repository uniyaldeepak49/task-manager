import { Status, Task } from '../interfaces/task';

export const TASK_LIST: Task[] = [
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
