import React, {useState} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [name, setName] = useState("");
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                style={styles.textInput}
                autoCapitalize= "none"
                autoCorrect= {false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 5 ? <Text>The word {name} is too short</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;