"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product.model");
const order_model_1 = require("./order.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(order);
    const prod = order.items.map((item) => {
        return {
            id: item._id,
            orderQuantity: item.orderQuantity,
            quantity: item.quantity,
        };
    });
    const updated = prod.map((p) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_model_1.Product.findOneAndUpdate({ _id: p.id }, { quantity: p.quantity - p.orderQuantity }, { new: true });
    }));
    return result;
});
exports.OrderServices = {
    createOrder,
};
