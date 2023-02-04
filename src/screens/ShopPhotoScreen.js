import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ShopPhotoScreen = ({navigation}) => {
  const [photos, setPhotos] = useState(null);
  const id = navigation.getParam('id');

  const getResponseById = async (id) => {
    const response = await yelp.get(`/${id}`);
    setPhotos(response.data.photos);
  };

  useEffect(() => {
    getResponseById(id);
  }, []);

  return (
    <FlatList
      data={photos}
      keyExtractor={(photoUrl) => photoUrl}
      renderItem={({item}) => {
        return <Image style={styles.imageStyle} source={{uri: item}} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 300,
    marginVertical: 10
  },
});

export default ShopPhotoScreen;
