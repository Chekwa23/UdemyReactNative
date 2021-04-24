import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Friend 1", age: 9},
        {name: "Friend 2", age: 9},
        {name: "Friend 3", age: 9},
        {name: "Friend 4", age: 9},
        {name: "Friend 5", age: 9},
        {name: "Friend 6", age: 9},
        {name: "Friend 7", age: 9},
        {name: "Friend 8", age: 9},
        {name: "Friend 9", age: 9}
    ]
    return (
        <View>
            <FlatList 
                // horizontal
                // showsHorizontalScrollIndicator={true}
                keyExtractor={friend => friend.name}
                data={friends} 
                renderItem={({item}) => {
                    return (
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;