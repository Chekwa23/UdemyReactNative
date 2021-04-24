import React from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";

const BoxScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box 1</Text>
            <Text style={styles.textStyle}>Box 2</Text>
            <Text style={styles.textStyle}>Box 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: "black",
        borderWidth: 3,
        alignItems: "center",
    },
    textStyle: {
        borderColor: "red",
        borderWidth: 3
    }
});

export default BoxScreen;
  
  