import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Linking, StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  var initialCount = 0;
  var [count, setCount] = useState(initialCount);
  const onClickHandler = () => {
    setCount(count + 1);
  };
  const onClickReset = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Programming with Eros</Text>
      <Text style={styles.text}>{count}</Text>
      <Pressable style={styles.button} onPress={onClickHandler}>
        <Text style={styles.text}> Click Counter</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onClickReset}>
        <Text style={styles.text}> Reset Counter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#000000",
    borderRadius: 10,
    margin: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    margin: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 250,
    backgroundColor: "black",
    margin: 10,
  },
});
