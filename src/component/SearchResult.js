import {useDispatch, useSelector, shallowEqual} from "react-redux";


const SearchResult = (props) => {

  const {
    searchKeyword
  } = useSelector(
    (state) => ({
      searchKeyword: state.search.searchKeyword,
    }),
    shallowEqual,
  )

  return (
    <>
      <p>SearchResult Component</p>
      <p>
        {
          searchKeyword
        }
      </p>
    </>
  )
}

export default SearchResult;