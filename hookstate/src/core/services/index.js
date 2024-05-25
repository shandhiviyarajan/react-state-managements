import { httpRequest } from "../interceptors";

export const apiGetProducts = async () => {
  return await httpRequest().get("https://fakestoreapi.com/products");
};


export const apiGetProductsById = async (id)=>{
    return await httpRequest().get(`https://fakestoreapi.com/products/${id}`);
}