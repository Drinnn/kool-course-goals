import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const clearInput = () => {
    setEnteredGoal("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        onPress={props.onAddGoal.bind(this, enteredGoal, clearInput)}
        title="ADD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { width: "80%", borderColor: "black", borderWidth: 1, padding: 10 },
});

export default GoalInput;
