import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [nextCount, setNextCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 5);
    setNextCount(nextCount + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>

      <Button title="Add" onPress={onClickHandler} />
      <Text style={styles.text}>You had clicked {nextCount} times</Text>
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
