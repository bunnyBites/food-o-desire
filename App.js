import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShopPhotoScreen from './src/screens/ShopPhotoScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Photo: ShopPhotoScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Buisness class',
    },
  },
);

export default createAppContainer(navigator);
