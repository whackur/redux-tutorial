import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_SEARCH_KEYWORD = 'search/CHANGE_SEARCH_KEYWORD';
export const change_search_keyword = createAction(CHANGE_SEARCH_KEYWORD);

export const [
  GET_NAVER_QUERY_KEYWORD,
  GET_NAVER_QUERY_KEYWORD_SUCCESS,
  GET_NAVER_QUERY_KEYWORD_FAILED,
] = createRequestActionTypes("search/GET_NAVER_QUERY_KEYWORD");
export const get_naver_query_keyword = createAction(GET_NAVER_QUERY_KEYWORD);