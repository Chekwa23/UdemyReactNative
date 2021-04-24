import React, {useState, useReducer} from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";

import ColorCounter from '../Components/ColorCounter'

// const SquareScreen = (props) => {
//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);
//     const x = 10;

//     return (
//         <View>
//             <ColorCounter color="Red" onIncrease={() => setRed(red+x)} onDecrease={() => setRed(red-x)} />
//             <ColorCounter color="Blue" onIncrease={() => setBlue(blue+x)} onDecrease={() => setBlue(blue-x)} />
//             <ColorCounter color="Green" onIncrease={() => setGreen(green+x)} onDecrease={() => setGreen(green-x)} />
//             <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
//         </View>
//     );
// }

const reducer = (state, action) => {
    switch(action.type){
        case 'red':
            return {...state, red: state.red + action.payload};
        case 'green':
            return {...state, green: state.green + action.payload};
        case 'blue':
            return {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SquareScreen = (props) => {
    const x = 10;

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => dispatch({type: 'red', payload: x})} onDecrease={() => dispatch({type: 'red', payload: -x})} />
            <ColorCounter color="Blue" onIncrease={() => dispatch({type: 'blue', payload: x})} onDecrease={() => dispatch({type: 'blue', payload: -x})} />
            <ColorCounter color="Green" onIncrease={() => dispatch({type: 'green', payload: x})} onDecrease={() => dispatch({type: 'green', payload: -x})} />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default SquareScreen;
  
  