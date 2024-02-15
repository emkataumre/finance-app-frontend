import { View, Text, Button } from "react-native";
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
export type Props = NativeStackScreenProps<RootStackParamList, "EntryEdit">;

const EntryEdit = ({ route, navigation }: Props) => {
  console.log(route.params.EntryId);

  return (
    <View>
      <View>
        <Text>Edit your entries from here</Text>
        <Button
          title="Go to delete"
          onPress={() => navigation.navigate("EntryDelete", { EntryId: 1 })}
        ></Button>
      </View>
    </View>
  );
};

export default EntryEdit;
