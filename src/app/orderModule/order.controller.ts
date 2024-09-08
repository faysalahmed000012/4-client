import { Request, Response } from "express";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await OrderServices.createOrder(payload);
    res.status(201).json({
      success: true,
      message: "Order Created Successfully",
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

export const OrderControllers = {
  createOrder,
};
