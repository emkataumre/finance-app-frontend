import React from "react";
import { TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";

interface TextInputTypes {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  value?: string;
}

const TextInputComponent = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
}: TextInputTypes) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    minWidth: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputComponent;
