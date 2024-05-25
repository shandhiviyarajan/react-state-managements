/* eslint-disable no-console */
import Products from "../api";
import { call, put, takeLatest } from "redux-saga/effects";
// @ts-ignore
import {actionGetProductsSuccess, actionGetProductsFail } from "../redux/products.action";


function* workFetchProducts(action) {
  try {
    const response = yield call(Products.getAll,action.payload);
    console.log("response", response, action);
    if(response && response.status === 200){
      yield put(actionGetProductsSuccess(response?.data));
    } else{
      yield put(actionGetProductsFail(response));
    }
  } catch (error) {
    yield put(actionGetProductsFail(error));
    console.log(error);
  }
}

function* fetchProductsSaga() {
  yield takeLatest("productSlice/actionGetProducts", workFetchProducts);
}

export default fetchProductsSaga;
