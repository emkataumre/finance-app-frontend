import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/categorySlice";
import { AppDispatch } from "../store/store";

type CategoryProps = { name: string; id: number };

export function CategoryItem(props: CategoryProps) {
  const { name, id } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button
        title="Delete"
        onPress={() => dispatch(deleteCategory(id))}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default CategoryItem;
