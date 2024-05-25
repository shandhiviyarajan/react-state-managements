import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    all_products: {
      isLoading: false,
      data: null,
      error: null,
    },
    product: {
      isLoading: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    actionGetProducts: (state) => {
      console.log('state', state);
      state.all_products = {
        isLoading: true,
        data: null,
        error: null,
      };
    },

    actionGetProductsSuccess: (state, action) => {
      state.all_products = {
        isLoading: false,
        data: action.payload,
        error: null,
      };
    },

    actionGetProductsFail: (state, action) => {
      state.all_products = {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    },

    actionGetProductById: (state, action) => {
      state.product = {
        isLoading: false,
        data: action.payload,
        error: null,
      };
    },
  },
});

export const { actionGetProducts, actionGetProductsSuccess, actionGetProductsFail, actionGetProductById } = productSlice.actions;
export default productSlice.reducer;
