import React from 'react';
import { Text, View } from 'react-native';

import styles from './src/Stylesheet';
import './src/Firebase';


import Test from './Test';

export default function App() {

  return (
    <View style={styles.container}>
      <Test/>
    </View>
  );
}