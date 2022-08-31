import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import AlbumsGallery from './AlbumsGallery';
import api from '../api';
import { ITEM_TYPES } from '../utils/constants';

const AlbumFeatures = () => {
  const [albums, setAlbums] = useState([]);

  const handleResultSelection = result => {
    api.getAlbumsOfArtist(result.id).then(response => setAlbums(response.data.items));
  }

  return (
    <>
      <SearchBar
        type={ITEM_TYPES.ARTIST}
        onResultSelection={handleResultSelection}
      />
      <AlbumsGallery
        albums={albums}
      />
    </>
  )
}

export default AlbumFeatures;