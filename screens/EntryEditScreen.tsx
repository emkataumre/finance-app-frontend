import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";

const EntryEditScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>EntryEditScreen</Text>
      <GoToButton
        locationName="Delete"
        navigation={navigation}
        screenName="EntryDeleteScreen"
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

export default EntryEditScreen;
