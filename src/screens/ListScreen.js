import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Johnny', age: '21'},
        { name: 'Matthew', age: '22' },
        { name: 'Danny', age: '23' },
        { name: 'Cindy', age: '24' },
        { name: 'Suzy', age: '25' },
        { name: 'Tim', age: '26' },
        { name: 'Margaret', age: '27' },
        { name: 'Mark Zuckerberg', age: '28' },
        { name: 'Skanky Hanky Harold', age: '29' },
    ];
    return (
    <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({ item }) => {
        return <View>
                <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
            </View>
    }} />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 20,
        marginVertical: 50
    },
});

export default ListScreen;