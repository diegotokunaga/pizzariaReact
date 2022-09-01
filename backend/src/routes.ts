import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';




const router = Router();

//rotas users
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/perfil', isAuthenticated , new DetailUserController().handle)

export { router };