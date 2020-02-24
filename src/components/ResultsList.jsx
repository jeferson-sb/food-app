import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from '@react-navigation/compat';
import ResultsDetail from './ResultsDetail';

function ResultsList({ title, results, navigation }) {
  if (!results.length) return null;

  return (
    <View>
      <Text style={styles.title}>
        {title} <Text style={styles.price}>{results[0].price}</Text>
      </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    color: '#2ecc71'
  }
});

export default withNavigation(ResultsList);
