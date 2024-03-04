import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { AppDispatch, RootState } from "../store/store";
import { createCategory, fetchCategories } from "../store/categorySlice";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";
import CategoryItem from "../components/CategoryItem";

const Categories = () => {
  const [text, onChangeText] = useState("Useless Text");
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Create Category"
        onPress={() => dispatch(createCategory(new CreateCategoryDto(text)))}
      />

      <SafeAreaView>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem name={item.name} id={item.id} />
          )}
          keyExtractor={(item) => item.id!.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Categories;
