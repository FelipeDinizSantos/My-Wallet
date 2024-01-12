import { User } from "../model/User";

interface InterfaceUser{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

class UserRepository{
    private users: User[];

    constructor(){
        this.users = [];
    }

    all():User[]{
        return this.users;
    }

    create({name, email, password, cpf}:InterfaceUser) : User{
        const user = new User(name, email, password, cpf);

        this.users.push(user);

        return user;
    }
}

export {UserRepository};