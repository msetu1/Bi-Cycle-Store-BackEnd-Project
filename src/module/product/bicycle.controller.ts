import { catchAsync } from '../utils/catchAsync';
import { ProductService } from './bicycle.service';

const createBicycle = catchAsync(async (req, res) => {
  const result = await ProductService.createBicycle(req.body);

  res.status(200).json({
    success: true,
    message: 'Bicycle created successfully',
    data: result,
  });
});

const allBicycle = catchAsync(async (req, res) => {
  const result = await ProductService.allBicycle();

  res.status(200).json({
    success: true,
    message: 'All Bicycle retrieved successfully',
    data: result,
  });
});

const singleBicycle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.singleBicycle(id);

  res.status(200).json({
    success: true,
    message: 'Single Bicycle retrieved successfully',
    data: result,
  });
});

const updateBicycle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await ProductService.updateBicycle(id, body);

  res.status(200).json({
    success: true,
    message: 'Bicycle updated successfully',
    data: result,
  });
});

const deleteBicycle = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductService.deleteBicycle(id);

  res.status(200).json({
    success: true,
    message: ' Bicycle deleted successfully',
    data: {},
  });
});

export const ProductController = {
  createBicycle,
  allBicycle,
  singleBicycle,
  updateBicycle,
  deleteBicycle,
};
