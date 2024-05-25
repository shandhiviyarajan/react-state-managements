import { hookstate, useHookstate } from "@hookstate/core";
const appState = {
  products: {
    isLoading: false,
    data: null,
    error: null,
  },

  singleProduct: {
    isLoading: false,
    data: null,
    error: null,
  },
};
export const globalState = hookstate(appState);

export const useGlobalState = (key = null) => {
  const state = useHookstate(globalState).get();
  if (key) {
    return state[key];
  } else {
    return state;
  }
};
