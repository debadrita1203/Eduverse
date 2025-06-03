// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleClick = () => {
    if (term.trim()) onSearch(term.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
