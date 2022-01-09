import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
 
const LoginScreen = ({navigation}) => {
  return (
    <View>
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
      
    </View>
  );
};
 
const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
      }
});
 
export default LoginScreen;
