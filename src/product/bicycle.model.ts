import { model, Schema } from 'mongoose';
import { IProduct } from './bicycle.interface';

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      minlength: [3, 'Product name must be at least 3 characters long'],
      maxlength: [100, 'Product name cannot exceed 100 characters'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required'],
      minlength: [2, 'Brand name must be at least 2 characters long'],
      maxlength: [50, 'Brand name cannot exceed 50 characters'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
      validate: {
        validator: Number.isInteger,
        message: 'Price must be an integer value',
      },
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: 'Type must be one of: Mountain, Road, Hybrid, BMX, Electric',
      },
      required: [true, 'Bicycle type is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative integer'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer value',
      },
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<IProduct>('Product', productSchema);
