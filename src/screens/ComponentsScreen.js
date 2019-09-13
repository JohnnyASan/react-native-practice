import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = <Text style={{ fontSize: 20 }}>My name is Johnny</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            {myName}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;