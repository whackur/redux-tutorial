import {useCallback, useState} from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as searchActions from '../store/modules/search/actions';
import {get_naver_query_keyword} from "../store/modules/search/actions";

const Search = (props) => {
  const {
    searchKeyword
  } = useSelector(
    (state) => ({
      searchKeyword: state.search.searchKeyword,
    }),
    shallowEqual,
  )
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    dispatch(searchActions.change_search_keyword(e.target.value));
  }

  const handleSearchKeyword = useCallback(() => {
    dispatch(searchActions.get_naver_query_keyword(searchKeyword));
  }, [searchKeyword])

  return (
    <>
      <input
        name={"myFirstInput"}
        onChange={handleInputChange}
      />
      <p>Search Component</p>
      <button
        onClick={handleSearchKeyword}
      >
        검색
      </button>
    </>
  )
}

export default Search;