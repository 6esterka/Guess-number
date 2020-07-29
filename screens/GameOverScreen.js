import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        //local image
                        source={require('../assets/success.png')}
                        //web image
                        //source ={{uri: "link"}}
                        resizeMode="cover" />
                </View>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>
                        {props.roundsNumber}</Text> rounds to guess
                the number <Text style={styles.highlight}>
                        {props.userNumber}</Text></BodyText>
                <MainButton onPress={props.onRestart} >New Game</MainButton>
            </View>
        </ScrollView>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
        marginHorizontal: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',

    }
}
)

export default GameOverScreen;