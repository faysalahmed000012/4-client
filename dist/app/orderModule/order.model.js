"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const CartItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, "Name can not be more than 20 characters"],
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    ratings: {
        type: Number,
        required: false,
        default: 5.0,
    },
    quantity: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    orderQuantity: {
        type: Number,
        required: true,
    },
});
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});
const OrderSchema = new mongoose_1.Schema({
    items: [CartItemSchema],
    user: UserSchema,
});
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
