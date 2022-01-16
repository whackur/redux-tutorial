import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_SEARCH_KEYWORD = 'search/CHANGE_SEARCH_KEYWORD';
export const change_search_keyword = createAction(CHANGE_SEARCH_KEYWORD);

