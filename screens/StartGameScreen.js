import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss()
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.confirmationBox}>
                <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <View>
                    <MainButton
                        onPress={() => props.onStartGame(selectedNumber)}>
                        START
                    </MainButton>
                </View>
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.primary}
                                title="Confirm"
                                onPress={confirmInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.secondary}
                                title="Reset"
                                onPress={resetInputHandler} />
                        </View>

                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'

    },
    inputContainer: {
        width: '80%',
        minWidth:300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15
    },
    button: {
        // width: '40%'
        width:Dimensions.get('window').width/4
    },
    input: {
        width: '20%',
        textAlign: 'center'
    },
    confirmationBox: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height>600 ? 100 : 20,
    },
    startGame: {
        color: '#cb132d',
    },
    chosenNumberInfo: {
        marginBottom: 20,
        fontSize: 20
    }
});

export default StartGameScreen;