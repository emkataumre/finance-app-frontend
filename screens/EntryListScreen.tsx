import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { GoToButton } from "../components/GoToButton";
import { useNavigation } from "@react-navigation/native";
import { Entry } from "../components/Entry";
import axios from "axios";

const EntryListScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<[]>();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://172.20.10.2:3000/entry", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) => <Entry item={item} />} />
      <GoToButton
        locationName="Edit"
        screenName="EntryEditScreen"
        navigation={navigation}
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

export default EntryListScreen;
