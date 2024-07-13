import { Router } from "express";
import { ProductControllers } from "./product.controllers";

const router = Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProductById);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
router.post("/", ProductControllers.addProduct);

export default router;
