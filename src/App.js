import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import PackageComparison from './Components/PackageComparison';
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <div className='maindiv'>
      <SearchBar />
      <PackageComparison />
      </div>
    </div>
  );
}

export default App;
