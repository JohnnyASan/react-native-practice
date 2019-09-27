import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

var counter = 0;

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
            <Text style={styles.textSize}>{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textSize: {
        fontSize: 40
        
    }
});

export default CounterScreen;

{/* <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} /> */}