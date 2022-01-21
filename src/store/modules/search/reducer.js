import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as SEARCH from './actions'

const initialState = {
  searchKeyword: '',
  searchResult: [],
  errorMsg: "",
}

const search = handleActions(
  {
    [SEARCH.CHANGE_SEARCH_KEYWORD]: (state, action) => {
      return produce(state, (draft) => {
        draft.searchKeyword = action.payload;
      })
    },
    [SEARCH.GET_NAVER_QUERY_KEYWORD_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.searchResult = action.payload.items;
      })
    },
    [SEARCH.GET_NAVER_QUERY_KEYWORD_FAILED]: (state, action) => {
      return produce(state, (draft) => {
        draft.errorMsg = "호출 오류";
      })
    },
  },
  initialState,
);

export default search;