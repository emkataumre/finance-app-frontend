import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchEntries } from "../store/entrySlice";
import EntryItem from "../components/EntryItem";

const EntryListScreen = () => {
  const entries = useSelector((state: RootState) => state.entries.entries);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEntries());
  }, []);

  console.log("in EntryListScreen", entries);

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => <EntryItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EntryListScreen;
