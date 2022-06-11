import Axios from 'axios'
import authenticators from './authenticators.json'
import { Buffer } from 'buffer'

class RequestManager {
  constructor() {
    this.baseURL = 'https://api.spotify.com/v1';
    this.getToken();
  }

  getDefaultHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    };
  }

  getToken = async () => {
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
      { this.token = response.data.access_token }
    );
  }

  getArtistSuggestions = async (name, limit = 20) => {
    const res = await Axios(`${this.baseURL}/search?type=artist&q=${name}&limit=${limit}`, {
        method: 'GET',
        headers: this.getDefaultHeaders()
    });
    return res.data.artists.items || [];
  }

  getAlbumsOfArtist = async(id, market = 'US') => {
    const res = await Axios(`${this.baseURL}/artists/${id}/albums?market=${market}`, {
      method: 'GET',
      headers: this.getDefaultHeaders()
    });
    return res.data.items || [];
  }

};

export default new RequestManager();