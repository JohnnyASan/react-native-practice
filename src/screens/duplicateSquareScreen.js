import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT_BY = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        //color === 'red', 'green', or 'blue'
        //change === +INCREMENT_BY, -INCREMENT_BY
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', INCREMENT_BY)}
                onDecrease={() => setColor('red', -1 * INCREMENT_BY)}
                color="Red" />
            <ColorCounter 
                onIncrease={() => setColor('blue', INCREMENT_BY)}
                onDecrease={() => setColor('blue', -1 * INCREMENT_BY)}
                color="Blue" />
            <ColorCounter 
                onIncrease={() => setColor('green', INCREMENT_BY)}
                onDecrease={() => setColor('green', -1 * INCREMENT_BY)}
                color="Green" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;