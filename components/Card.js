import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {

        //styling shadow for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,

        backgroundColor: 'white',
        //styling shadow for android
        elevation: 20,
        padding: 30,
        borderRadius: 10
    }
})