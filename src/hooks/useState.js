import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [searchRes, setSearchRes] = useState([]);
  const [error, setError] = useState('');

  const getResponse = async (searchText) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchText,
          location: 'New York',
          limit: 30,
        },
      });
      setSearchRes(response.data.businesses);
    } catch (err) {
      setError('Something wrong with the request');
    }
  };

  useEffect(() => {
    getResponse('pizza');
  }, []);

  return [searchRes, error, getResponse];
};
