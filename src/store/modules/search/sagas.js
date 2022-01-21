import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../libs/createRequestSaga";
import * as SEARCH from './actions';
import * as naverApi from '../../../libs/api/naverApi'

const getNaverQueryKeywordSaga = createRequestSaga(
  SEARCH.GET_NAVER_QUERY_KEYWORD,
  naverApi.getNaverQueryKeyword,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(SEARCH.GET_NAVER_QUERY_KEYWORD, getNaverQueryKeywordSaga),
  ];
}
