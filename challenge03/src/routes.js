import { Router } from 'express';

import UserController from './app/controllers/UserController';
import PlanController from './app/controllers/PlanController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import RegistrationController from './app/controllers/RegistrationController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.use(adminMiddleware);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);
routes.put('/students/:id', StudentController.update);

routes.post('/register', RegistrationController.store);
routes.get('/registrations', RegistrationController.index);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

export default routes;