import { httpRequest } from "../../../core/interceptors";

class Products {
  static getAll = async () => {
    return await httpRequest().get("https://fakestoreapi.com/products");
  };

  static get = async (product_id) => {
    return await httpRequest().get(
      `https://fakestoreapi.com/products/${product_id}`
    );
  };
}

export default Products;
