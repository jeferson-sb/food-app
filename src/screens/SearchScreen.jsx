import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchBusiness, results, errorMsg] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchBusiness(term)}
      />
      <View style={styles.container}>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : (
          <>
            <Text style={styles.message}>
              We have found {results.length} results
            </Text>
            {term ? (
              <Text style={styles.title}>
                Best{' '}
                <Text style={{ fontWeight: '700', color: '#f4511e' }}>
                  {term}
                </Text>{' '}
                near you
              </Text>
            ) : null}
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <ResultsList
                results={filterResultsByPrice('$')}
                title='Cost Effective'
              />
              <ResultsList
                results={filterResultsByPrice('$$')}
                title='Bit Pricier'
              />
              <ResultsList
                results={filterResultsByPrice('$$$')}
                title='Big Spender'
              />
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginHorizontal: 15,
    flex: 1
  },
  message: {
    marginBottom: 10,
    color: '#a7a7a7'
  },
  title: {
    fontSize: 19,
    marginBottom: 10
  }
});
