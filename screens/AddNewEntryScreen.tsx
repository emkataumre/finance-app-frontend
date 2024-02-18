import { View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerComponent from "../components/DateTimePickerComponent";

const AddNewEntryScreen = () => {
  const [data, setData] = useState();
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currency, setCurrency] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleAmountChange = (text: string) => {
    setAmount(text);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleCurrencyChange = (currency: any) => {
    setCurrency(currency);
  };

  const handleNameChange = (name: any) => {
    setName(name);
  };

  const handleCommentChange = (comment: any) => {
    setComment(comment);
  };

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:3000/entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          selectedDate,
          currency,
          name,
          comment,
        }),
      });
      const jsonData = response.json();
      setData(await jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIconPress = () => {
    console.log("amount", amount);
    console.log("date", selectedDate);
    console.log("currency", currency);
    console.log("name", name);
    console.log("comment", comment);
    postData();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numbers-and-punctuation"
          onChangeText={handleAmountChange}
        />
        <DateTimePickerComponent
          onChange={handleDateChange}
        ></DateTimePickerComponent>
        <TextInput
          style={styles.input}
          placeholder="Currency"
          keyboardType="default"
          onChangeText={handleCurrencyChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          onChangeText={handleNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Comment"
          keyboardType="default"
          onChangeText={handleCommentChange}
        />
      </SafeAreaView>
      <Ionicons
        name={"add-circle-outline"}
        size={50}
        color={"#000"}
        onPress={handleIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    minWidth: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddNewEntryScreen;
