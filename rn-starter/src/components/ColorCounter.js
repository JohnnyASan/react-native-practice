import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View style={{ alignSelf: 'center', borderColor: 'black', borderWidth: 5 }}>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;