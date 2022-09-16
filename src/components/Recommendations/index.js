import React, { useState } from 'react';
import { ITEM_TYPES } from '../../utils/constants';
import SearchBar from '../SearchBar';
import ScRecommendations from './ScRecommendations';
import api from "../../api";

const Recommendations = () => {
  const [seedTracks, setSeedTracks] = useState([]);
  const [seedAlbums, setSeedAlbums] = useState([]);
  const [seedArtists, setSeedArtists] = useState([]);
  const [recommendedTracks, setRecommendedTracks] = useState([]);

  const handleGetRecommendations = () => {
    api.getRecommendations(seedTracks, seedAlbums, seedArtists)
        .then(response => setRecommendedTracks(response.data.tracks));
  };

  return (
    <ScRecommendations>
      <div className="search-bars">
        <SearchBar
            type={ITEM_TYPES.TRACK}
            onResultSelection={result => setSeedTracks([...seedTracks, result.id])}
        />
        <SearchBar
            type={ITEM_TYPES.ALBUM}
            onResultSelection={result => setSeedAlbums([...seedAlbums, result.id])}
        />
        <SearchBar
            type={ITEM_TYPES.ARTIST}
            onResultSelection={result => setSeedArtists([...seedArtists, result.id])}
        />
      </div>
      <div
        style={{ position: 'absolute', transform: 'translate(50%, -50%)', top: '50%', left: '50%' }}
        onClick={handleGetRecommendations}
      >
        GO
      </div>
      {recommendedTracks.map(track => (
          <li
              key={track.id}
              className="dropdown-item"
          >
            {track.album.images.length > 2 &&
                <img
                    className="dropdown-item-image"
                    src={track.album.images[1].url}
                    alt={track.album.name}
                />
            }
            <div className="dropdown-item-name">{`${track.name} - ${track.album.name} - ${track.artists[0].name}`}</div>
          </li>
      ))}
    </ScRecommendations>
  );
}

export default Recommendations;