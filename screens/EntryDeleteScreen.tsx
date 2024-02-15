import { View, Text, Button } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";

const EntryDeleteScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>EntryDeleteScreen</Text>
      <GoToButton
        locationName="Overview"
        navigation={navigation}
        screenName="EntryListScreen"
      ></GoToButton>
    </View>
  );
};

export default EntryDeleteScreen;
