import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Vinu');
  const [session, setSession] = useState({number: 6, title: 'state'});

  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Vinu Balagopal A P');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name} </Text>
      <Text style={styles.text}>
        This is session {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="Update State" onPress={onClickHandler} />
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
