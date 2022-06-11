import React, { useCallback, useState } from 'react';
import SearchBar from './SearchBar';
import RequestManager from './api/utils';
import AlbumsGallery from './AlbumsGallery';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [searchedArtist, setSearchedArtist] = useState('');

  const handleButtonClick = useCallback(suggestion => {
    setSearchedArtist(suggestion.name)
    RequestManager.getAlbumsOfArtist(suggestion.id).then(data => setAlbums(data));
  }, []);

  return (
    <div className="App">
      <SearchBar
        rm={RequestManager}
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
