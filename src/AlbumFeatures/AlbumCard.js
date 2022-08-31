import React, { useState, useEffect } from 'react';
import api from '../api';
import { getAverageObject } from '../utils';
import { ScAlbumCard } from './ScAlbumCard';
import FeaturesRange from './FeaturesRange';

const AlbumCard = ({ album }) => {
  const [features, setFeatures] = useState({});

  const coverIndex = window.innerWidth < 700 ? 1 : 0;

  useEffect(() => {
    api.getTracksOfAlbum(album.id)
    .then(response => response.data.items)
    .then(items => items.map(item => item.id))
    .then(itemIDs => api.getAudioFeatures('', itemIDs))
    .then(response => setFeatures(getAverageObject(response.data.audio_features)));
  }, [album, features]);

  return (
    <ScAlbumCard>
      <div className="album-name">{album.name}</div>
      <div className="album-card">
        <div className="album-card-inner">
          <div className="album-card-front">
            <img 
              className="album-cover"
              key={`${album.id}-cover`}
              src={album.images[coverIndex].url}
              alt={album.name}
            />
          </div>
          <div className="album-card-back">
            <div className="album-features">
              <img 
                className="album-cover-blur"
                key={`${album.id}-blur`}
                src={album.images[coverIndex].url}
                alt={album.name}
              />
              {Object.keys(features).length > 0 && 
                <FeaturesRange
                  id={album.id}
                  features={features}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </ScAlbumCard>
  )
}

export default AlbumCard;
