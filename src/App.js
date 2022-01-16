import {useState} from 'react';
import './App.css';
import Search from './component/Search';
import SearchResult from './component/SearchResult';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <SearchResult />
      </header>
    </div>
  );
}

export default App;
