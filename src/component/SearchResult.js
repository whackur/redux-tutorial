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

  console.log('searchKeyword in SearchResult => ', searchKeyword);

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