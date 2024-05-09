/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {WishlistProvider} from './src/contexts/WishlistContext';

const Root = () => (
  <WishlistProvider>
    <App />
  </WishlistProvider>
);

AppRegistry.registerComponent(appName, () => Root);
