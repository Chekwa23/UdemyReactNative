import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const ComponentsScreen = () => {
    const name = "Chekwa"
    return (
        <View>
            <Text style={styles.testStyle}>Hello #Chekwa</Text>
            <Text style={styles.testStyle2}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    testStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
})

export default ComponentsScreen;