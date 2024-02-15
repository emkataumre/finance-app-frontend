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
        screenName="EntryEditScreen"
        navigation={navigation}
      ></GoToButton>
    </View>
  );
};

export default EntryListScreen;
