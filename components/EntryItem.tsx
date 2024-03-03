import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { EntryProps } from "../types/EntryProps";
import { deleteEntry, setItem } from "../store/entrySlice";
import { useNavigation } from "@react-navigation/native";
import EntryEditScreen from "../screens/EntryEditScreen";

const EntryItem = (props: EntryProps) => {
  const { item } = props;
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const handleEdit = () => {
    dispatch(setItem(item));
    navigation.navigate(EntryEditScreen); //What is going on here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {props.item.name}</Text>
      <Text style={styles.text}>Amount: {props.item.amount}</Text>
      <Text style={styles.text}>Currency: {props.item.currency}</Text>
      <Text style={styles.text}>Comment: {props.item.comment}</Text>
      <Text style={styles.text}>Date: {props.item.date.toLocaleString()}</Text>
      <Button
        title="Delete"
        onPress={() => dispatch(deleteEntry(props.item.id))}
      ></Button>
      <Button title="Edit" onPress={handleEdit}></Button>
    </View>
  );
};

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
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
});

export default EntryItem;
