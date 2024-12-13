import { IProduct } from "./bicycle.interface"
import { Product } from "./bicycle.model"

const createBicycle=async(playLoad:IProduct)=>{
    const result =await Product.create(playLoad);
    return result;
};

const allBicycle=async()=>{
    const result =await Product.find();
    return result;
};

const singleBicycle=async(id:string)=>{
    const result =await Product.findById(id);
    return result;
};

const updateBicycle=async(id:string,playLoad:IProduct)=>{
    const result =await Product.findByIdAndUpdate(id,playLoad,{new:true});
    return result;
};

const deleteBicycle=async(id:string)=>{
    const result =await Product.findByIdAndDelete(id);
    return result;
};

export const ProductService={
    createBicycle,
    allBicycle,
    singleBicycle,
    updateBicycle,
    deleteBicycle
}