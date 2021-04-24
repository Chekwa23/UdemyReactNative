import React from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default ColorCounter;
  
  