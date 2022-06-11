import React from 'react';
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
        <div style={{display: 'flex', flexDirection: 'column'}} onHo>
          <div className="album-name">{album.name}</div>
          <img 
            className="album-cover"
            key={album.id}
            src={album.images[0].url}
            alt={album.name}
          />
        </div>
        )}
      </div>
    </>
  );
}

export default AlbumsGallery;