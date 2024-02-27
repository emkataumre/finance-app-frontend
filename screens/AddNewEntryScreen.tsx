import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerComponent from "../components/DateTimePickerComponent";
import TextInputComponent from "../components/TextInput";
import { Currency } from "../types/misc";

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

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCurrencyChange = (currency: string) => {
    setCurrency(currency);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleCommentChange = (comment: string) => {
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
        <TextInputComponent
          placeholder="Amount"
          keyboardType="numbers-and-punctuation"
          onChangeText={handleAmountChange}
        />
        <DateTimePickerComponent
          onChange={handleDateChange}
        ></DateTimePickerComponent>
        <TextInputComponent
          placeholder="Currency"
          keyboardType="default"
          onChangeText={handleCurrencyChange}
        />
        <TextInputComponent
          placeholder="Name"
          keyboardType="default"
          onChangeText={handleNameChange}
        />
        <TextInputComponent
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
});

export default AddNewEntryScreen;
