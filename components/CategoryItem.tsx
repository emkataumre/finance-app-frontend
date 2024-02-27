import { View, Text } from "react-native";
import React from "react";

type CategoryProps = { name: string };

export function CategoryItem(props: CategoryProps) {
  const { name } = props;
  console.log("Category Item", name);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default CategoryItem;
