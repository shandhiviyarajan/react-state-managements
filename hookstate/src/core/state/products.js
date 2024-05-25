import { useHookstate } from "@hookstate/core";
import { apiGetProducts ,apiGetProductsById} from "../services";
import { globalState } from ".";

import React from "react";



export const useActionGetProducts = () => {
  const state = useHookstate(globalState);
  React.useEffect(() => {
    state.products.set({
      isLoading: true,
      data: null,
      error: null,
    });

    apiGetProducts()
      .then((response) => {
        state.products.set({
          isLoading: false,
          data: response.data,
          error: null,
        });
      })
      .catch((error) => {
        state.products.set({
          isLoading: false,
          data: null,
          error: error,
        });
      });
  }, []);

  return state.products.get();
};

export const useActionGetProductsById = (id) => {
    const state = useHookstate(globalState);
    React.useEffect(() => {
      state.singleProduct.set({
        isLoading: true,
        data: null,
        error: null,
      });
  
      apiGetProductsById(id)
        .then((response) => {
          state.singleProduct.set({
            isLoading: false,
            data: response.data,
            error: null,
          });
        })
        .catch((error) => {
          state.singleProduct.set({
            isLoading: false,
            data: null,
            error: error,
          });
        });
    }, []);
  
    return state.singleProduct.get();
  };
