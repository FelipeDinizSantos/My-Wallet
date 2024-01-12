import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { AppError } from './errors/AppError';

const app = express();
const APP_PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
// Global middleware
app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
})

app.listen(APP_PORT, ()=>
{
    console.log('Server is running on port: ' + APP_PORT);
})