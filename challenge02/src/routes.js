import { Router } from 'express';

// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Joao Paulo',
//     email: 'jpfricks@gmail.com',
//     password_hash: '123456',
//   });
//   // res.json({ message: 'Hello world!!!' });
//   return res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
