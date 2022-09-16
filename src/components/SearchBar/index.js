import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useDebounce } from '../../utils/hooks'
import ScSearchBar from './ScSearchBar';
import api from '../../api';

const SearchBar = ({ type, onResultSelection }) => {
  const [inputValue, setInputValue] = useState('');

  const [results, setResults] = useState([]);

  const dropdownRef = useRef();

  const typeLabel = type?.length ? type[0].toUpperCase() + type.slice(1) + 's' : '';

  const handleButtonClick = useCallback(result => {
    setInputValue(result.name);
    onResultSelection(result);
    dropdownRef.current.style.display = 'none';
  }, [onResultSelection, dropdownRef]);

  const debouncedInput = useDebounce(inputValue, 150);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedInput.length > 1) {
      api.getResults(type, debouncedInput)
      .then(items => setResults(items));
    } else {
      setResults([]);
    }
  }, [debouncedInput, type]);

  return (
    <ScSearchBar type={type}>
      <label className="search-label" htmlFor="search">{`Search For ${typeLabel}`}</label>
      <div className="search">
        <input
            className="search-input"
            onChange={handleInputChange}
            onFocus={() => dropdownRef.current.style.display = 'flex'}
            value={inputValue}
        />
        {inputValue && (
          <button className="search-clear" onClick={() => setInputValue('')}>X</button>
        )}
      </div>
        <ul className="search-dropdown" ref={dropdownRef}>
          {results?.length > 0 && results.map(result => (
            <li
              key={result.id}
              className="dropdown-item"
              onClick={() => {
                handleButtonClick(result);
              }}
            >
              {result.images.length > 2 &&
                <img
                  className="dropdown-item-image"
                  src={result.images[1].url}
                  alt={result.name}
                />
              }
              <div className="dropdown-item-name">{result.name}</div>
            </li>
          ))}
        </ul>
    </ScSearchBar>
  );
}

export default SearchBar;
