import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {Box, Card, Typography, CardContent} from '@mui/material';


const SearchResult = (props) => {

  const {
    searchKeyword,
    searchResult,
    errorMsg,
  } = useSelector(
    (state) => ({
      searchKeyword: state.search.searchKeyword,
      searchResult: state.search.searchResult,
      errorMsg: state.search.errorMsg,
    }),
    shallowEqual,
  )

  console.log('searchResult => ', searchResult);
  console.log('errorMsg => ', errorMsg);

  const NaverResultCard = (props) => {
    return (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        <CardContent
          style={{
            width: 500,
            marginHorizontal: 5,
          }}
        >
          <a href={props.link} target='_black'>
            <Typography sx={{ fontSize: 30 }} color="red" gutterBottom>
              {props.title}
            </Typography>
          </a>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography variant="body2">
            <br />
            {props.description}
          </Typography>
        </CardContent>
      </Box>
    )
  }

  return (
    <>
      <p>SearchResult Component</p>
      <p>
        {
          searchKeyword
        }
      </p>
      {
        searchResult ? (
          searchResult.map((item, index) =>
            <NaverResultCard
              title={item.title}
              link={item.link}
              description={item.description}
              key={index}
            />
          )
        ) : null
      }
    </>
  )
}

export default SearchResult;