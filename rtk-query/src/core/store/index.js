import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import rootReducer from "../redux";
import { configureStore } from "@reduxjs/toolkit";

//create middleware
const sagaMiddleware = createSagaMiddleware();

//configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
});
//run saga watchers
sagaMiddleware.run(rootSaga);
export default store;
