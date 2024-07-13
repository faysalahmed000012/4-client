import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { products, meta } = await ProductServices.getAllProducts(req.query);
    res.status(200).json({
      success: true,
      message: "Products Retrieved Successfully",
      data: { products, meta },
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
const addProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await ProductServices.addProduct(payload);
    res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await ProductServices.getProductById(id);
    res.status(200).json({
      success: true,
      message: "Product Retrieved Successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const product = await ProductServices.updateProduct(id, payload);
    res.status(201).json({
      success: true,
      message: "Product Updated Successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const products = await ProductServices.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Product deleted Successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error,
    });
  }
};

export const ProductControllers = {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
};
