import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
        <Text style={styles.text}>Welcome to my app!</Text>
        <View style={styles.allBorder}>
          <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo" 
          />
          <Button 
          onPress={() => navigation.navigate('List')} 
          title="Go to List Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Image')} 
          title="Go to Image Reuse Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Counter')} 
          title="Go to Image Counter Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Color')} 
          title="Go to Color Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Square')} 
          title="Go to Square Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Text')} 
          title="Go to Text Input Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Box')} 
          title="Go to Box Demo"
          />
        </View>    
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 50
  },
  allBorder: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2
  }
});

export default HomeScreen;
