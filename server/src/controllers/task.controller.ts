import { Request, Response } from 'express';
import { Task, TaskRequest, TaskStatus } from '../models';
import { addTask, getTasks, incrementId } from '../database';

export const createTask = (req: TaskRequest, res: Response): void => {
    const id = incrementId();
    const newTask = {
        id: (id).toString(),
        ...req.body,
        status: TaskStatus.PENDING,
        createdAt: new Date()
    };

    addTask(newTask as Task);
    res.status(201).json(newTask);
};

export const getAllTasks = (_: Request, res: Response): void => {
    res.json(getTasks());
};