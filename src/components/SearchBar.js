import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onSubmit, city, onCityChange}) => {
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="What do you fancy eating?"
          value={term}
          onChangeText={onTermChange}
        />
      </View>
      <View style={styles.backgroundStyle}>
        <MaterialCommunityIcons name="city" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="words"
          style={styles.inputStyle}
          placeholder="Type in a city in North America"
          value={city}
          onChangeText={onCityChange}
          onEndEditing={onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
