import React from 'react';
import ScAlbumsGallery from './ScAlbumsGallery';
import AlbumCard from './AlbumCard';

const AlbumsGallery = ({ albums })=> {
  return (
    <ScAlbumsGallery>
      {albums.length > 0 && albums.map(album =>
        <AlbumCard key={`${album.id}-card`} album={album} />
      )}
    </ScAlbumsGallery>
  );
}

export default AlbumsGallery;