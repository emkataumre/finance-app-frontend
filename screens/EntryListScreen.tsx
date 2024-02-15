import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";
import { useNavigation } from "@react-navigation/native";

const EntryListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>EntryListScreen</Text>
      <GoToButton
        locationName="Edit"
        screenName="EntryEditScreen"
        navigation={navigation}
      ></GoToButton>
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
