import React from 'react';

import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

  const HomeScreen = ({ navigation }) => {
  // console.log(props);
 // console.log(props.navigation);
 // console.log(props.navigation.navigate('List'))

  return (
    <View>
      <Text style={styles.text}>      Welcome to KFC    </Text>
      <Button
      // onPress={() => console.log('Button pressed')}
        onPress={() => navigation.navigate('Shop')}

        title="Go to ShopDetails"
        
      />
      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Products"
        onPress={() => navigation.navigate('Product')}
        
      />
       <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Order"
        onPress={() => navigation.navigate('Order')}
        
      />
         <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="LogIn/SignUp"
        onPress={() => navigation.navigate('Login')}
        
      />
     

      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: '#dc143c',

  }
 
});

export default HomeScreen;
