import React from "react";
import {
  useActionGetProducts,
  useActionGetProductsById,
} from "../../core/state/products";
import { View } from "./view";

const AllProducts = () => {
  useActionGetProducts();
  const singleProduct = useActionGetProductsById(1);

  return (
    <>
      <h1>All Products</h1>

      <View />

      {JSON.stringify(singleProduct)}
    </>
  );
};

export { AllProducts };
