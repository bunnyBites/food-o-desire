import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import RestaurantDetails from './RestaurantDetails';

const RestaurantList = ({title, preparedSearch, navigation}) => {
  if (!preparedSearch) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* <WebView source={{ uri: 'https://infinite.red' }} style={{ marginTop: 20 }}/> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={preparedSearch}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Photo', {
                  id: item.id,
                });
              }}>
              <RestaurantDetails data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(RestaurantList);
