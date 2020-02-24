import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.field}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Find burgers, restaurant, fast food ...'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#e9e9e9',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  icon: {
    fontSize: 29,
    alignSelf: 'center',
    marginHorizontal: 9
  }
});
