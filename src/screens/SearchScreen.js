import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResponse from '../hooks/useState';
import RestaurentList from '../components/RestaurantList';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchRes, error, getResponse] = useResponse();

  const filterShopsOnRating = (price) => {
    return searchRes.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        searchText={searchText}
        onChangeSearchValue={(newSearchValue) => setSearchText(newSearchValue)}
        onSubmit={() => {
          getResponse(searchText);
        }}
      />
      <ScrollView>
        <RestaurentList
          preparedSearch={filterShopsOnRating('$')}
          title="Cost Effective"
        />
        <RestaurentList
          preparedSearch={filterShopsOnRating('$$')}
          title="Bit Pricer"
        />
        <RestaurentList
          preparedSearch={filterShopsOnRating('$')}
          title="Big Spender"
        />
      </ScrollView>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    marginVertical: 20,
  },
});

export default SearchScreen;
