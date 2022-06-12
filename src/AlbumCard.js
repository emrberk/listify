import React, { useState, useEffect } from 'react';
import api from './api';
import { getAverageObject } from './utils';
import { ScAlbumCard } from './ScAlbumCard';

const AlbumCard = ({ album }) => {

  const [features, setFeatures] = useState({});

  useEffect(() => {
    api.getTracksOfAlbum(album.id)
    .then(response => response.data.items)
    .then(items => items.map(item => item.id))
    .then(itemIDs => api.getAudioFeatures('', itemIDs))
    .then(response => setFeatures(getAverageObject(response.data.audio_features)));
  }, [album.id]);

  const getFeatures = () => {
    return Object.keys(features).map(feature => (
      <div className="album-features-item" key={`${album.id}-${feature}`}>
        {feature} = {features[feature]}
      </div>
    ));
  }

  return (
    <ScAlbumCard>
      <div className="album-name">{album.name}</div>
      <div className="album-card">
        <div className="album-card-inner">
          <div className="album-card-front">
            <img 
              className="album-cover"
              key={album.id}
              src={album.images[0].url}
              alt={album.name}
            />
          </div>
          <div className="album-card-back">
            <div className="album-features">
              <img 
                className="album-cover-blur"
                key={album.id}
                src={album.images[0].url}
                alt={album.name}
              />
              {Object.keys(features).length > 0 && getFeatures()}
            </div>
          </div>
        </div>
      </div>
    </ScAlbumCard>
  )
}

export default AlbumCard;
