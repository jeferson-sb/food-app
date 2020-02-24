import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import Yelp from '../api/yelp';

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async () => {
    const response = await Yelp.get(`/businesses/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return <WebView style={{ flex: 1 }} source={{ uri: result.url }} />;
}
