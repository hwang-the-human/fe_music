import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../extentions/colors';

function SearchBar(): JSX.Element {
  const [input, setInput] = useState('');
  return (
    <View style={styles.searchBar}>
      <View>
        <Feather name="search" color="black" size={20} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Search"
        placeholderTextColor={'grey'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // width: '100%',
    backgroundColor: colors.grey,
    borderRadius: 100,
    padding: 10,
    gap: 10,
  },

  input: {
    width: '100%',
  },
});

export default SearchBar;
