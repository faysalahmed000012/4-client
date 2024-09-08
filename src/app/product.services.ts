import QueryBuilder from "../builder/queryBuilder";
import { Product } from "./product.model";

const getAllProducts = async (query: any) => {
  const productQuery = new QueryBuilder(
    Product.find({ isDeleted: false }),
    query
  )
    .search(["name"])
    .filter()
    .paginate()
    .sort();
  const meta = await productQuery.countTotal();

  const products = await productQuery.modelQuery;
  return { products, meta };
};

const getProductById = async (id: string) => {
  const product = await Product.findOne({ _id: id, isDeleted: false });
  return product;
};

const addProduct = async (payload: any) => {
  const result = await Product.create(payload);
  return result;
};

const updateProduct = async (id: string, payload: object) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const ProductServices = {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
};
