import { UserRepository } from "../repositories/UserRepository";
import { User } from "../model/User";

interface InterfaceRequest{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

// DTO = Data Trasnfer Object

class CreateUserService{ 
    constructor(private userRepository : UserRepository){}
    execute({name, email, password, cpf}:InterfaceRequest): User{
        const user = this.userRepository.create({name, email, password, cpf});

        return user;
    }
}

export { CreateUserService };