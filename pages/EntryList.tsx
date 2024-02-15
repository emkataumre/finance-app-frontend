import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { EntryParams } from "../types/EntryParams";
import { Entry } from "../components/Entry";

export type Props = NativeStackScreenProps<RootStackParamList, "EntryList">;

const EntryList = ({ navigation }: Props) => {
  const [entries, setEntries] = React.useState([]);
  const baseUrl = "http://127.0.0.1:3000";

  const fetchEntries = async () => {
    const response = await fetch(baseUrl + "/entry");
    const data = await response.json();
    console.log("data log", data);
    return data;
  };

  useEffect(() => {
    console.log("entries log", entries);
  }, [entries]);

  useEffect(() => {
    fetchEntries()
      .then((response) => console.log("response", response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      <View>
        <FlatList
          data={entries}
          renderItem={({ item }: EntryParams) => (
            <Entry
              item={{
                amount: item.amount,
                date: item.date,
                currency: item.currency,
                name: item.name,
                comment: item.comment,
              }}
            />
          )}
        ></FlatList>
        <Button
          title="Go to edit"
          onPress={() => navigation.navigate("EntryEdit", { EntryId: 1 })}
        ></Button>
      </View>
    </View>
  );
};

export default EntryList;
