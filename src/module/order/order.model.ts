import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
      trim: true,
    },
    product: {
      type: String,
      required: [true, 'Product name is required'],
      minlength: [3, 'Product name must be at least 3 characters long'],
      maxlength: [100, 'Product name cannot exceed 100 characters'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer value',
      },
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
      validate: {
        validator: (value: number) => Number.isFinite(value),
        message: 'Total price must be a valid number',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<IOrder>('Order', orderSchema);
