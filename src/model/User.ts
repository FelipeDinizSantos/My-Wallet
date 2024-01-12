interface interfaceItem{
    description: string;
    value: number;
    date: Date;
}

class User{
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