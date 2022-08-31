import Axios from 'axios'
import authenticators from './authenticators.json'
import { Buffer } from 'buffer'
import { ITEM_TYPES } from '../utils/constants';

class API {
  constructor() {
    Axios('https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer(authenticators.clientID + ':' + authenticators.clientSecret).toString('base64'))
      },
      data: 'grant_type=client_credentials',
      json: true
    }).then(response =>
      {
        this.axios = Axios.create({
          baseURL: 'https://api.spotify.com/v1',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${response.data.access_token}`
          }
        }) 
      }
    );
  }
  
  getResults = (type, name, limit = 10) => {
    return this.axios.get(`/search?type=${type}&q=${name}&limit=${limit}`)
    .then(response => {
      const items = response.data[`${type}s`].items;
      if (type === ITEM_TYPES.TRACK) {
        items.forEach(item => item.images = item.album.images);
      }
      return items;
    });
  }

  getArtistResults = (name, limit = 10) => {
    return this.axios.get(`/search?type=artist&q=${name}&limit=${limit}`);
  }

  getTrackResults = (name, limit = 10) => {
    return this.axios.get(`/search?type=track&q=${name}&limit=${limit}`);
  }

  getAlbumsOfArtist = (id, market = 'US') => {
    return this.axios.get(`/artists/${id}/albums?market=${market}`);
  }

  getTracksOfAlbum = (id, market = 'US') => {
    return this.axios.get(`/albums/${id}/tracks`);
  }

  getAudioFeatures = (id = '', multipleIDs = []) => {
    if (id !== '') {
      return this.axios.get(`/audio-features/${id}`);
    } else {
      let queryString = '';
      multipleIDs.forEach(id => queryString = queryString.concat(`${id},`));
      queryString = queryString.slice(0, -1);
      return this.axios.get(`/audio-features?ids=${queryString}`);
    }
  }

  getRecommendations = (trackIDs = []) => {
    let queryString = '';
    trackIDs = trackIDs.slice(0, 5);
    trackIDs.forEach(trackID => queryString = queryString.concat(trackID + ","));
    queryString = queryString.slice(0, -1);
    return this.axios.get(`/recommendations?seed_tracks=${queryString}`);
  }

};

export default new API();