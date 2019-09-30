import React from'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ lookUp, onLookUpChange, onLookUpSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search" 
            value={lookUp}
            onChangeText={newLookUp => onLookUpChange(newLookUp)} //first way of callback function to parent
            onEndEditing={onLookUpSubmit} // second way of callback function to parent
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 35,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 20
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;