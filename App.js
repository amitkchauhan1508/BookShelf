import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NativeBaseProvider, StatusBar} from 'native-base';
import Navigation from './src/navigation';
import {palette} from './src/theme.util';

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={'dark-content'}
        showHideTransition="slide"
        backgroundColor={palette.primary}
      />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Adjust for status bar height
    backgroundColor: palette.primary, // Set the background color of the header
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
