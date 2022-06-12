import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from './hooks'
import API from './api';
import './searchBar.css';

const SearchBar = ({ handleButtonClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const debouncedInput = useDebounce(inputValue, 150);

  const dropdownRef = useRef();

  const handleSearchBlur = () => {
    dropdownRef.current.style.display = 'none';
  };

  const handleInputFocus = () => {
    dropdownRef.current.style.display = 'flex';
  }

  const getSuggestions = useCallback(inputName => {
    API.getArtistSuggestions(inputName).then(response => setSuggestions(response.data.artists.items));
  }, []);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedInput.length > 1) {
      getSuggestions(debouncedInput);
    } else {
      setSuggestions([]);
    }
  }, [debouncedInput, getSuggestions]);

  return (
    <>
      <label className="search-label" htmlFor="search">Search For An Artist</label>
      <input
        className="search"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <div
        className="search-dropdown"
        ref={dropdownRef}
      >
        {suggestions.length > 0 && suggestions.map(suggestion => 
          <button 
            key={suggestion.id}
            className="dropdown-item"
            onClick={() => {
              handleButtonClick(suggestion);
              dropdownRef.current.style.display = 'none';
            }
            }
          >
            {suggestion.name}
          </button>
        )}
      </div>
    </>
  );
}

export default SearchBar;