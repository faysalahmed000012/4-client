import { Router } from "express";
import { OrderControllers } from "./orderModule/order.controller";
import { ProductControllers } from "./product.controllers";

const router = Router();

router.get("/", ProductControllers.getAllProducts);
router.post("/order", OrderControllers.createOrder);
router.get("/:id", ProductControllers.getProductById);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
router.post("/", ProductControllers.addProduct);

export default router;
