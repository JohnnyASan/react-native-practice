import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(newValue) => {
                setName(newValue);
            }}
            />
            <Text style={{ textAlign: "center" }}>
                Text Entered: {"\n"}
                {name}
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