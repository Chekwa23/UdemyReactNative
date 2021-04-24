import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
          title="Go to Components"
          onPress={() => navigation.navigate("Components")}
        />
        <Button
          title="Go to List demo"
          onPress={() => navigation.navigate("List")}
        />
        <Button
          title="Go to Image Screen"
          onPress={() => navigation.navigate("Image")}
        />
        <Button
          title="Go to Counter demo"
          onPress={() => navigation.navigate("Counter")}
        />
        <Button
          title="Go to Color demo"
          onPress={() => navigation.navigate("Color")}
        />
        <Button
          title="Go to Square demo"
          onPress={() => navigation.navigate("Square")}
        />
        <Button
          title="Go to Text demo"
          onPress={() => navigation.navigate("Text")}
        />
        <Button
          title="Go to Box demo"
          onPress={() => navigation.navigate("Box")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text>Opacity</Text>
          <Text>Opacity</Text>
          <Text>Opacity</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

