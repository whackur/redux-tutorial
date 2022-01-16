import {useState} from "react";


const Search = (props) => {
  const [inputValue, setInputValue] = useState('Button');
  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <>
      <input
        name={"myFirstInput"}
        onChange={handleInputChange}
      />
      <p>Search Component</p>
    </>
  )
}

export default Search;