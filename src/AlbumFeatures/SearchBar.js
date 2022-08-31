import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../hooks'
import API from '../api';
import ScSearchBar from './ScSearchBar';

const SearchBar = ({ setAlbums }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleButtonClick = useCallback(suggestion => {
    setInputValue(suggestion.name);
    API.getAlbumsOfArtist(suggestion.id).then(response => setAlbums(response.data.items));
  }, [setAlbums]);

  const debouncedInput = useDebounce(inputValue, 150);

  const dropdownRef = useRef();

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
    <ScSearchBar>
      <label className="search-label" htmlFor="search">Search For An Artist</label>
      <input
        className="search"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        value={inputValue}
      />
      <ul
        className="search-dropdown"
        ref={dropdownRef}
      >
        {suggestions.length > 0 && suggestions.map(suggestion => (
          <li
            key={suggestion.id}
            className="dropdown-item"
            onClick={() => {
                handleButtonClick(suggestion);
                dropdownRef.current.style.display = 'none';
            }}
          >
            {suggestion.images.length > 2 &&
              <img
                className="dropdown-item-image"
                src={suggestion.images[1].url}
                alt={suggestion.name}
              />
            }
            <div className="dropdown-item-name">{suggestion.name}</div>
          </li>
        ))}
      </ul>
    </ScSearchBar>
  );
}

export default SearchBar;
