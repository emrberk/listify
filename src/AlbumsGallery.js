import React from 'react';
import api from './api';
import { getAverageObject } from './utils';
import AlbumCard from './AlbumCard';
import './gallery.css';

const AlbumsGallery = ({ searchedArtist, albums })=> {
  return (
    <>
      {albums.length > 0 && 
      <div className="result-info">
        {albums.length} results found for {searchedArtist}
      </div>}
      <div className="albums-container">
        {albums.length > 0 && albums.map(album =>
          <AlbumCard album={album} />
        )}
      </div>
    </>
  );
}

export default AlbumsGallery;