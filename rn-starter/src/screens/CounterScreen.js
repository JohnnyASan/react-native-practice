import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.HowToChange) {
        case 'increase':
            return {...state, count: state.count + 1};
        case 'decrease':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const count = state;
    return (
        <View>
            <Button title="Increase" onPress={() => {e
                dispatch({HowToChange: 'increase'});
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({HowToChange: 'decrease'});
            }} />
            <Text style={styles.textSize}>{state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textSize: {
        fontSize: 40
        
    }
});

export default CounterScreen;

{/* <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} /> */}