import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/categorySlice";
import { AppDispatch } from "../store/store";

type CategoryProps = { name: string; id?: number };

const CategoryItem = ({ name, id }: CategoryProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button
        title="Delete"
        onPress={() => id !== undefined && dispatch(deleteCategory(id))}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default CategoryItem;
