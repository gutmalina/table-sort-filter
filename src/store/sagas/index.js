import { call, takeEvery, put } from "redux-saga/effects";
import { BASE_URL } from "../../utils/config";
import { getUsersSuccess, getUsersFailure } from "../reduсers";

function* WorkGetUsersFetch() {
  try {
    const users = yield call(() => fetch(BASE_URL));
    const response = yield users.json();
    if (response) {
      yield put(getUsersSuccess(response));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}

function* usersSaga() {
  yield takeEvery("users/getUsersFetch", WorkGetUsersFetch);
}

export default usersSaga;
