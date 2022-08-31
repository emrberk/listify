import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AlbumsGallery from './AlbumsGallery';

const AlbumFeatures = () => {
  const [albums, setAlbums] = useState([]);
  return (
    <>
      <SearchBar
        setAlbums={setAlbums}
      />
      <AlbumsGallery
        albums={albums}
      />
    </>
  )
}

export default AlbumFeatures;