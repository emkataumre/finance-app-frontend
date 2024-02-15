import { View, Text, Button } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";

const EntryEditScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>EntryEditScreen</Text>
      <GoToButton
        locationName="Delete"
        navigation={navigation}
        screenName="EntryDeleteScreen"
      ></GoToButton>
    </View>
  );
};

export default EntryEditScreen;
