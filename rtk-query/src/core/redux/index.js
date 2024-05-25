import { combineReducers } from "@reduxjs/toolkit";
import ProductReducers from "../../components/products/redux/index.action";

const rootReducer = combineReducers({
    ...ProductReducers

});

export default rootReducer;