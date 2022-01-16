import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as SEARCH from './actions'

const initialState = {
  searchKeyword: '',
  searchResult: [],
}

const search = handleActions(
  {
    [SEARCH.CHANGE_SEARCH_KEYWORD]: (state, action) => {
      produce(state, (draft) => {
        draft.searchKeyword = action.payload;
      })
    }
  },
  initialState,
);

export default search;