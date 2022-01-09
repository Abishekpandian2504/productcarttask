import React, { useReducer } from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';


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
       <ImageBackground
      blurRadius={10}

      style={styles.background}
          source={require("../assets/kfcorder2.jpg")}>
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

      <Image style={styles.logo} source={require('../assets/vegburger.jpg')} />
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

      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text >  add more things text here  </Text>

      </ImageBackground>
    
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
    margin: 10,
    color: "#ff8c00",
    width: 300,
    height:100
  },
  background: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
},
input: {
  fontSize: 20,
  width:200,
  height:40,
  paddingTop:20,
  borderColor: 'black',
  borderWidth: 1
}
});

export default OrderScreen;
