import React, { useReducer } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const OrderScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    
    <View>
      
      <Image style={styles.logo} source={require('../assets/chickenburger.jpg')} />
      <Button style={styles.button}
        title="+"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button style={styles.button}
        title="-"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>price:Rs120</Text>
      <Text>Current Count: {state.count}</Text>

      <Image style={styles.logo} source={require('../assets/chocolatepizza.jpg')} />
      <Button style={styles.button}
        title="+"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button style={styles.button}
        title="-"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>price:Rs100</Text>
      <Text>Current Count: {state.count}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
    marginTop: 10,
    marginBottom: 5
  }, 
  button: {
    margin: 5
  }
});

export default OrderScreen;
