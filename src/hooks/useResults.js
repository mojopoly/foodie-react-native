import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(['']);
  //console.log(term);

  const searchApi = async (searchTerm, city) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: city,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong...');
    }
  };

  useEffect(() => {
    searchApi('japanese', 'toronto');
  }, []);

  return [searchApi, results, errorMessage];
};
