import { all } from "redux-saga/effects";

import SearchSagas from "./search/sagas";

export default function* rootSaga() {
  yield all([
    SearchSagas(),
  ])
}