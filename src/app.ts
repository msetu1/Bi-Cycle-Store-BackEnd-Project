import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './module/product/bicycle.route';
import { globalErrorHandling } from './module/utils/globalErrorHandling';
const app:Application = express();

// parser 
app.use(express.json());
app.use(cors());

// application route
app.use('/api/product',ProductRoute);

app.get('/', (req:Request, res:Response) => {
  res.send('Server is running')
})

app.use(globalErrorHandling);
export default app;