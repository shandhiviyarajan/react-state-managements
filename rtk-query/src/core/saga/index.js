import { all } from "redux-saga/effects";
import ProductSagas from '../../components/products/saga/index.saga';
function* rootSaga() {
  yield all([
    ...ProductSagas,
  ]);
}
export default rootSaga;
