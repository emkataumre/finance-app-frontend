import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EntryParams } from "../types/EntryParams";

export const Entry = ({ item }: EntryParams) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.amount}</Text>
      <Text>{item.comment}</Text>
      <Text>{item.currency}</Text>
      <Text>{item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  item: {},
});
