import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const greeting = "Hello, there!"
  const name = "mav"
  return (
    <View>
      <Text style={styles.textStyle} >This is the components screen.</Text>
      <Text style={styles.subHeaderStyle}>I am {name}.</Text>
    </View>
  ) 
  
 
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;