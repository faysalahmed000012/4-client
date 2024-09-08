import { Product } from "../product.model";
import { Order } from "./order.model";

const createOrder = async (order: any) => {
  const result = await Order.create(order);
  const prod = order.items.map((item: any) => {
    return {
      id: item._id,
      orderQuantity: item.orderQuantity,
      quantity: item.quantity,
    };
  });
  const updated = prod.map(
    async (p: any) =>
      await Product.findOneAndUpdate(
        { _id: p.id },
        { quantity: p.quantity - p.orderQuantity },
        { new: true }
      )
  );
  return result;
};

export const OrderServices = {
  createOrder,
};
