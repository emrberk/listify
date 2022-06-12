import React, { useCallback, useState } from 'react';
import SearchBar from './SearchBar';
import API from './api/index.js';
import AlbumsGallery from './AlbumsGallery';
import './global.css';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [searchedArtist, setSearchedArtist] = useState('');

  const handleButtonClick = useCallback(suggestion => {
    setSearchedArtist(suggestion.name)
    API.getAlbumsOfArtist(suggestion.id).then(response => setAlbums(response.data.items));
  }, []);

  return (
    <div className="App">
      <SearchBar
        handleButtonClick={handleButtonClick}
      />
      <AlbumsGallery 
        searchedArtist={searchedArtist}
        albums={albums}
      />
    </div>
  );
}

export default App;
