import React, { useState } from'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CityBar from '../components/CityBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [lookUp, setLookUp] = useState('');
    const [city, setCity] = useState('');
    const [searchAPI, restaurants, errorMessage] = useRestaurants();
    
    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        });
    };

    return ( //<> instead of <View stye={{ flex: 1 }}>
        <>
            <CityBar
            city={city} 
            onCityChange={setCity}
            onCitySubmit={() => searchAPI(lookUp, city)}
            />
            <SearchBar
            lookUp={lookUp} 
            onLookUpChange={setLookUp} 
            onLookUpSubmit={() => searchAPI(lookUp, city)}
            />
            {errorMessage ? <Text style={{alignSelf: 'center'}}>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList restaurants={filterRestaurantsByPrice('$')} title="Cost Effective" />
                <RestaurantList restaurants={filterRestaurantsByPrice('$$')} title="Bit Pricier" />
                <RestaurantList restaurants={filterRestaurantsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    searchParent: {
        flexDirection: 'column',
    },
    resultsAmountStyle: {
        alignSelf: 'center'
    },
});

export default SearchScreen;