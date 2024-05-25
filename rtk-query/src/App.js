import React from "react";
import { AllProducts } from "./components";
import store from "./core/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <AllProducts />
      </Provider>
    </>
  );
};

export default App;
