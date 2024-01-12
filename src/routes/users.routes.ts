import { Router } from 'express';
import { CreateUserService } from '../service/CreateUserService';
import { UserRepository } from '../repositories/UserRepository';

const userRoutes = Router();
const userRepository = new UserRepository();

userRoutes.get('/', (req, res)=>{
    const users = userRepository.all();

    return res.status(200).json(users);
})

userRoutes.post('/', (req, res)=>
{
    const { name, email, password, cpf } = req.body;
    const createUserService = new CreateUserService(userRepository);
    const user = createUserService.execute({name, email, password, cpf}); 

    return res.status(200).json(user);
});

export { userRoutes };