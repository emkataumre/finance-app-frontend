import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";

export type Props = NativeStackScreenProps<RootStackParamList, "EntryEdit">;

const EntryDelete = () => {
  return (
    <View>
      <View>
        <Text>Delete your entries here</Text>
      </View>
    </View>
  );
};

export default EntryDelete;
