import { Request } from 'express';

export interface Task {
    id?: string;
    title: string;
    description: string;
    dueDate: Date;
    status: TaskStatus;
    createdAt: Date;
}

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed'
}

export interface TaskRequest extends Request {
    body: Task;
}