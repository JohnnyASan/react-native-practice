import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT_BY = 15;

const reducer = (state, action) => {
    //state === {red: num, green: num, blue: num };
    //action is "how we should change the object" { colorToChange: 'red' || 'green' || 'blue', amout: 15 || -15}
    switch(action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state :  {...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount };
        case 'reset':
            return {...state, red: 0, green: 0, blue: 0};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: INCREMENT_BY })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * INCREMENT_BY })}
                color="Red" />            
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: INCREMENT_BY })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * INCREMENT_BY })}
                color="Green" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: INCREMENT_BY })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * INCREMENT_BY })}
                color="Blue" />
            <View style={{ marginTop: 75, marginBottom: 30, alignSelf: 'center', height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
            <Button title="Reset" onPress={() => {
                dispatch({ colorToChange: 'reset', amount: 0 });
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;