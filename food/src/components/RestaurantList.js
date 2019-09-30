import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantDetailsObj from './RestaurantDetailsObj';

const RestaurantList = ({ title, restaurants, navigation }) => {
    if (!restaurants.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                            <RestaurantDetailsObj 
                                restaurant={item}
                            />
                        </TouchableOpacity>   
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(RestaurantList);