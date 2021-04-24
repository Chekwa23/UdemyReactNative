import React, {useState, useReducer} from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";

// const CounterScreen = (props) => {
//     const [counter, setCounter] = useState(0);

//     return (
//         <View>
//             <Button title="Increase" onPress={() => {
//                 setCounter(counter + 1);
//             }} />
//             <Button title="Decrease" onPress={() => {
//                 setCounter(counter - 1);
//             }} />
//             <Text>Current Count: {counter}</Text>
//         </View>
//     );
// }

const reducer = (state, action) => {
    return action.type === "increase" ? {...state, counter: state.counter + action.payload} : {...state, counter: state.counter - action.payload};
}

const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const { counter } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => {
                // setCounter(counter + 1);
                dispatch({type: "increase", payload: 1})
            }} />
            <Button title="Decrease" onPress={() => {
                // setCounter(counter - 1);
                dispatch({type: "decrease", payload: 1})
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default CounterScreen;
  
  