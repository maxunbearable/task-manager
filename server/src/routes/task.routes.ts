import { Router } from 'express';
import { createTask, getAllTasks } from '../controllers';

const router = Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);