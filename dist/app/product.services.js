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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const queryBuilder_1 = __importDefault(require("../builder/queryBuilder"));
const product_model_1 = require("./product.model");
const getAllProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productQuery = new queryBuilder_1.default(product_model_1.Product.find({ isDeleted: false }), query)
        .search(["name"])
        .filter()
        .paginate()
        .sort();
    const meta = yield productQuery.countTotal();
    const products = yield productQuery.modelQuery;
    return { products, meta };
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOne({ _id: id, isDeleted: false });
    return product;
});
const addProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    return result;
});
exports.ProductServices = {
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addProduct,
};
