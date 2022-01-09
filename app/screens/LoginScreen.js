import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground } from 'react-native';
 
const LoginScreen = () => {
  return (
    <View>
       <ImageBackground
      blurRadius={10}

      style={styles.background}
          source={require("../assets/kfclog.jpg")}>
          <Image style={styles.logo} source={require('../assets/KFC_Logo.jpg')} />
          <Text >  Name </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
         <Text >  Number </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
         <Text >  Email id </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text > password </Text>
       <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
      
      <Button title='login' 
      onPress={() => console.log('Buttonpressed')}
      />
         <Button title='signup' 
      onPress={() => console.log('Buttonpressed')}
      />
      </ImageBackground>
    </View>
  );
};
 
const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
      },
      logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    background: {
    
      justifyContent: 'flex-end',
  
  },
});
 
export default LoginScreen;
