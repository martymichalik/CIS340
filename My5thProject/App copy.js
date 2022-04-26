import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}> Just Yellow Text!</Text>
      <Text style={styles.largGreen}> This is Big Green</Text>
      <Text style={[styles.yellow, styles.largGreen]}> Yellow text, then Big Green Text</Text> //second overrides first
      <Text style={[styles.largGreen, styles.yellow]}> Big Green text, then yellow Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    marginTop: 60,
  },

  largGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  yellow: {
    color: 'yellow',
    fontSize: 20,
  


  },
});
