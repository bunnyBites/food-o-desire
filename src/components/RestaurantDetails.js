import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const RestaurantDetails = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: data.image_url,
        }}
      />
      <Text style={styles.nameStyle}>{data.name}</Text>
      <Text>{`${data.rating} Stars, ${data.review_count} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 8,
  },
  imageStyle: {
    height: 150,
    width: 200,
    borderRadius: 5,
  },

  nameStyle: {
    fontWeight: 'bold',
    marginVertical: 3,
  },
});

export default RestaurantDetails;
