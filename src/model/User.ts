import { v4 as uuidv4 } from 'uuid';

interface interfaceItem{
    id: string;
    description: string;
    value: number;
    date: Date;
}

class User{
    id:string;
    name:string;
    email:string;
    cpf:string;
    password:string;
    accountBallance:number;
    incomes: Array<interfaceItem>;
    outcomes: Array<interfaceItem>;
    createdAt: Date;
    updatedAt: Date;

    constructor(name: string, email:string, cpf:string, password: string){
        this.id=uuidv4();
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
        this.accountBallance = 0;
        this.incomes = [];
        this.outcomes = [];
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

export {User};