import React from 'react';
import { AUDIO_FEATURES } from './utils/constants';

const FeaturesRange = ({ id, features }) => {
  return (
    Object.keys(features).map(feature => {
      return (
        <div className="album-features-item" key={`${id}-${feature}`}>
          <div className="album-features-item-name">{feature.toUpperCase()}</div>
          <input
            className="album-features-item-range"
            type="range"
            readOnly={true}
            min={`${AUDIO_FEATURES[feature][0]}`}
            max={`${AUDIO_FEATURES[feature][1]}`}
            value={features[feature]}
          />
        </div>
    )})
  );
}

export default FeaturesRange;
