import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => {
                setName(newValue);
            }}
            />
            <Text style={{ textAlign: "center" }}>
                Name Entered: { "\n" }
                { name }
                { "\n" }
                { name.length < 6 ? <Text>Name must be longer than 5 characters</Text> : null }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;