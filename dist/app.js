"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./app/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "https://assignment-4-client-six.vercel.app",
    credentials: true,
}));
app.use("/products", product_routes_1.default);
app.get("/", (req, res) => {
    res.send(`Green Horizon on ${process.env.PORT}`);
});
exports.default = app;
