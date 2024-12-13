import express from 'express';
import { ProductController } from './bicycle.controller';

const router=express.Router();

router.post('/create-bicycle',ProductController.createBicycle);

export const ProductRoute=router;
