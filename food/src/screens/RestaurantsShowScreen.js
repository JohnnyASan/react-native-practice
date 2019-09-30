import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantsShowScreen = ({ navigation }) => {
    const [res, setRes] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRes(response.data);
    };
    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!res) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{res.name}</Text>
            <FlatList 
                data={res.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        item ? <Image source={{ uri: item }} style={styles.image} /> : null
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
});

export default RestaurantsShowScreen;