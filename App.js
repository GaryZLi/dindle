import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './Firebase';
import Landing from './src/screens/Landing';

export default function App() {
  return (
    <View style={styles.container}>
      <Landing></Landing>
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
