import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='searchbar-maindiv'>
    <div className='search-bar-div'>
    <div className="search-bar">
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
      <button className='compare-button'>Compare</button>
    </div>
    </div>
    </div>
  );
}

export default SearchBar;
