import 'reflect-metadata';
import { CreateUsersTable1705094463431 as tableUsersMigration} from './migrations/1705094463431-CreateUsersTable';    
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'c66',
    database: 'db_myWallet',
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [tableUsersMigration],
    subscribers: []
});

export { AppDataSource };
