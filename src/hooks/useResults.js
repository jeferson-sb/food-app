import { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import Yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });

  async function loadInitialPosition() {
    try {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;

        await setCurrentLocation({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    } catch {
      setErrorMsg(
        'Could not get your current Position, make you sure your GPS is enabled'
      );
    }
  }

  async function searchBusiness(searchTerm) {
    try {
      const response = await Yelp.get('/businesses/search', {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
      });
      const { businesses } = response.data;
      setResults(businesses);
      setErrorMsg(null);
    } catch (error) {
      console.log(error);
      setErrorMsg(`Could not search for ${searchTerm} on Yelp`);
    }
  }

  useEffect(() => {
    async function getResults() {
      await loadInitialPosition();
      await searchBusiness('Pizza');
    }
    getResults();
  }, []);

  return [searchBusiness, results, errorMsg];
};
