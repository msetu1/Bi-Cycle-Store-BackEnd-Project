import { IProduct } from "./bicycle.interface"
import { Product } from "./bicycle.model"

const createBicycle=async(playLoad:IProduct)=>{
    const result =await Product.create(playLoad);
    return result;
}

const allBicycle=async()=>{
    const result =await Product.find();
    return result;
}
export const ProductService={
    createBicycle,
    allBicycle,
}