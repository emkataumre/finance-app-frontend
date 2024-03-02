import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { EntryProps, EntryListProps } from "../types/EntryProps";
import { deleteEntry } from "../store/entrySlice";

export function EntryItem(props: EntryProps) {
  const { item } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {props.item.name}</Text>
      <Text style={styles.text}>Amount: {props.item.amount}</Text>
      <Text style={styles.text}>
        {/* Date: {props.item.date.toLocaleDateString()} */}
      </Text>
      <Text style={styles.text}>Currency: {props.item.currency}</Text>
      <Text style={styles.text}>Comment: {props.item.comment}</Text>
      <Button
        title="Delete"
        onPress={() => dispatch(deleteEntry(props.item.id))}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff", // Background color
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333", // Text color
  },
});

export default EntryItem;
