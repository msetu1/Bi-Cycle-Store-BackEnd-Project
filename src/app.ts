import express, { Application, Request, Response } from 'express';
const app:Application = express();

// parser 


// application route


app.get('/', (req:Request, res:Response) => {
  res.send('Server is running')
})

export default app;