import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = () => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=av%20bolivar&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
