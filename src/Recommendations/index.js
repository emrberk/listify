import React from 'react';
import SearchBar from '../SearchBar';
import { ITEM_TYPES } from '../utils/constants';

const Recommendations = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SearchBar type={ITEM_TYPES.TRACK} />
      <SearchBar type={ITEM_TYPES.ALBUM} />
      <SearchBar type={ITEM_TYPES.ARTIST} />
    </div>
  );
}

export default Recommendations;