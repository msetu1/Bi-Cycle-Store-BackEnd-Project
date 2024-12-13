/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

export const globalErrorHandling = (err: any, req: Request, res: Response) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
