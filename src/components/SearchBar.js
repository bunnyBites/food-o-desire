import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({searchText, onChangeSearchValue, onSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search..."
        value={searchText}
        onChangeText={(value) => onChangeSearchValue(value)}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 15,
  },
  iconStyle: {
    fontSize: 40,
    marginHorizontal: 12,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
