import { View, Text, Button } from "react-native";
import React from "react";
import { GoToButton } from "../components/GoToButton";
import { useNavigation } from "@react-navigation/native";

const EntryListScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>EntryListScreen</Text>
      <GoToButton
        locationName="Edit"
        navigation={navigation}
        screenName="EntryEditScreen"
      ></GoToButton>
    </View>
  );
};

export default EntryListScreen;
