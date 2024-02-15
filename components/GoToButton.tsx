import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export const GoToButton = ({ navigation, screenName, locationName }: any) => {
  return (
    <View>
      <Button
        title={`Go to ${locationName}`}
        onPress={() => navigation.navigate(screenName)}
      ></Button>
    </View>
  );
};
