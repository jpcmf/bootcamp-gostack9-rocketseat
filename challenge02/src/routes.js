import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.use(authMiddleware);
routes.use(adminMiddleware);

routes.put('/users/:id', UserController.update);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

export default routes;
