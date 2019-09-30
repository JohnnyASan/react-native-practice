import React from'react';
import {View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CityBar = ({ city, onCityChange, onCitySubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <MaterialIcons name="location-city" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Enter City or Zip" 
            value={city}
            onChangeText={onCityChange}
            onEndEditing={onCitySubmit}
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
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default CityBar;