import { all, fork } from "redux-saga/effects";
import catsSaga from "./catsSlice/saga";

const rootSaga = function* () {
  yield all([
    fork(catsSaga),
    // Other forks
  ]);
};

export default rootSaga;
