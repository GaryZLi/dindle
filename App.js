import React from 'react';
import { View, StyleSheet } from 'react-native';

import './src/Firebase';
import Navigator from './src/components/Navigator';

export default function App() {

  return (
    <View style={styles.container}>
        <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
