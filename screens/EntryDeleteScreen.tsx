import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";

const EntryDeleteScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>EntryDeleteScreen</Text>
      <GoToButton
        locationName="Overview"
        navigation={navigation}
        screenName="EntryListScreen"
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

export default EntryDeleteScreen;
