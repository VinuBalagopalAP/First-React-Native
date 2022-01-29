/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Button, Linking, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Vinu Balagopal A P</Text>
      <Button
        title="YouTube Channel"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/c/vinubalagopalap');
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#fff', fontSize: 20, fontStyle: 'italic', margin: 10},
});

export default App;
