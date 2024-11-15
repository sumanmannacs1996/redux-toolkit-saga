import { call, put, takeEvery } from "redux-saga/effects";
import { fertchCatsFailed, fetchCatsSuccess } from ".";
import axios from "axios";

function* workCatsSaga({ payload }) {
  console.log(payload);
  const { fName, lName } = payload;
  console.log("************Hello", fName, lName);
  try {
    const cats = yield call(() =>
      axios.get(`https://api.thecatapi.com/v1/breeds`)
    );
    const formatedCatsShoten = cats.data.slice(0, 10);
    yield put(fetchCatsSuccess(formatedCatsShoten));
  } catch (error) {
    yield put(fertchCatsFailed(error.message));
  }
}

function* catsSaga() {
  yield takeEvery("cats/fetchCatsStart", workCatsSaga);
}

export default catsSaga;
