import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ResultsDetail({ result }) {
  const businessImg = result.image_url
    ? { uri: result.image_url }
    : require('../../assets/bg-food.jpg');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={businessImg} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.isClosed}>
          {result.is_closed ? 'CLOSED' : 'OPEN'}
        </Text>
      </View>
      <View style={styles.rating}>
        {[...Array(Math.floor(result.rating)).keys()].map((icon, i) => (
          <Feather key={i} name='star' style={styles.icon} />
        ))}
        <Text style={styles.reviews_count}>
          ({result.review_count}) Reviews
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 20
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold',
    opacity: 0.7
  },
  icon: {
    color: '#f4511e'
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviews_count: {
    marginLeft: 5
  },
  isClosed: {
    letterSpacing: 1.4,
    fontWeight: 'bold'
  }
});
