import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EntryParams } from "../types/EntryParams";

export const Entry = ({ item }: EntryParams) => {
  return (
    <View style={styles.entryContainer}>
      <Text>{item.name}</Text>
      <Text>{item.amount}</Text>
      <Text>{item.comment}</Text>
      <Text>{item.currency}</Text>
      <Text>{item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entryContainer: { backgroundColor: "red" },
});
