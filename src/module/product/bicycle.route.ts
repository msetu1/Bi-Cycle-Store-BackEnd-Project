import express from 'express';
import { ProductController } from './bicycle.controller';

const router=express.Router();

router.post('/create-bicycle',ProductController.createBicycle);
router.get('/:id',ProductController.singleBicycle);
router.put('/:id',ProductController.updateBicycle);
router.delete('/:id',ProductController.deleteBicycle);
router.get('/',ProductController.allBicycle);

export const ProductRoute=router;
