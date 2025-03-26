import { Task } from './models';

let tasks: Task[] = [];
let currentId = 1;

export const getTasks = () => tasks;

export const addTask = (task: Task) => tasks.push(task);

export const incrementId = () => currentId++;