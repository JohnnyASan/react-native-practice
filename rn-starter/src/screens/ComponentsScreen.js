import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = () => {
    const myName = <Text style={{ textAlign: "center", fontSize: 20 }}>My name is Johnny</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            {myName}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        textAlign: "center",
        marginBottom: 75
    }
});

export default ComponentsScreen;