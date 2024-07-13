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
exports.ProductControllers = void 0;
const product_services_1 = require("./product.services");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { products, meta } = yield product_services_1.ProductServices.getAllProducts(req.query);
        res.status(200).json({
            success: true,
            message: "Products Retrieved Successfully",
            data: { products, meta },
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield product_services_1.ProductServices.addProduct(payload);
        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield product_services_1.ProductServices.getProductById(id);
        res.status(200).json({
            success: true,
            message: "Product Retrieved Successfully",
            data: product,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const product = yield product_services_1.ProductServices.updateProduct(id, payload);
        res.status(201).json({
            success: true,
            message: "Product Updated Successfully",
            data: product,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const products = yield product_services_1.ProductServices.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: "Product deleted Successfully",
            data: products,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
exports.ProductControllers = {
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addProduct,
};
