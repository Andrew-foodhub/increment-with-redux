import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import store from '../TaskRedux/store';
import {increment} from './reducer';
import {decrement} from './reducer';

export const AppScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="Add" onPress={() => dispatch(increment())} />
        <Button title="Minus" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
