import {createStackNavigator} from 'react-navigation-stack';
import createAppContainer from 'react-navigation';
import Home from './src/Home';
import Sample from './src/Sample';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Sample: {
    screen: Sample
  }
});

export default createAppContainer(AppNavigator);