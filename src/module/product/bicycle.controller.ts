import { catchAsync } from "../utils/catchAsync"
import { ProductService } from "./bicycle.service";

const createBicycle=catchAsync(async(req,res)=>{
    const result =await ProductService.createBicycle(req.body);

    res.status(200).json({
        success:true,
        message:'Bicycle created successfully',
        data:result
    });
});

const allBicycle=catchAsync(async(req,res)=>{
    const result =await ProductService.allBicycle();

    res.status(200).json({
        success:true,
        message:'All Bicycle retrieved successfully',
        data:result
    });
});

export const ProductController={
    createBicycle,
    allBicycle
}