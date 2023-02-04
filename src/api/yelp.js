import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer eWCX0lPWopajasx-PsDJHi8e640B2pxF0QoJHGvpQkNgeiNHAdCxz9ZROEtm6unwMeOqSL7-GaK2je02bT2dwhig4lKsJFFGAtSzTp-M6zrgfSfOXTceLwkJB0GEX3Yx',
  },
});
