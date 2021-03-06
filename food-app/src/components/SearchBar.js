import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'; 

export default function SearchBar({term, onTermChange, onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={newterm => onTermChange(newterm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
