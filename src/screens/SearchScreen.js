import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  //console.log(props);
  const [term, setTerm] = useState('');
  const [city, setCity] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          city={city}
          onCityChange={setCity}
          onSubmit={() => searchApi(term, city)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
        <ResultsList title="Baller!" results={filterResultsByPrice('$$$$')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
